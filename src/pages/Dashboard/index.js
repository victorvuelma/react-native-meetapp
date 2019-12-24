import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { ActivityIndicator } from 'react-native';

import { parseISO, format, addDays, subDays } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import Background from '~/components/Background';
import Meetup from '~/components/Meetup';

import {
  MeetupList,
  DateSelector,
  DateChange,
  DateText,
  Info,
  InfoText,
} from './styles';

export default function Dashboard() {
  const [date, setDate] = useState(new Date());
  const [loading, setLoading] = useState(true);
  const [meetups, setMeetups] = useState([]);

  const dateFormatted = useMemo(
    () =>
      format(date, "dd 'de' MMMM", {
        locale: ptBR,
      }),
    [date],
  );

  const loadMeetups = useCallback(() => {
    async function load() {
      setLoading(true);

      const response = await api.get('meetups', {
        params: {
          date: format(date, 'yyyy-MM-dd'),
        },
      });

      const data = response.data.map(meetup => ({
        ...meetup,
        dateFormatted: format(
          parseISO(meetup.date),
          "dd 'de' MMMM', às 'HH'h'",
          {
            locale: ptBR,
          },
        ),
      }));

      setMeetups(data);
      setLoading(false);
    }

    load();
  }, [date]);

  useEffect(() => loadMeetups(), [date, loadMeetups]);

  async function subscribe(meetup) {
    await api.post(`meetups/${meetup.id}/subscription`);

    await setMeetups(
      meetups.map(m => {
        if (m.id === meetup.id) {
          return { ...m, disabled: true };
        }
        return m;
      }),
    );
  }

  return (
    <Background>
      <DateSelector>
        <DateChange onPress={() => !loading && setDate(subDays(date, 1))}>
          <Icon name="chevron-left" size={36} color="#fff" />
        </DateChange>
        <DateText>{dateFormatted}</DateText>
        <DateChange onPress={() => !loading && setDate(addDays(date, 1))}>
          <Icon name="keyboard-arrow-right" size={36} color="#fff" />
        </DateChange>
      </DateSelector>
      {loading ? (
        <Info>
          <ActivityIndicator color="#fff" size="large" />
        </Info>
      ) : meetups.length ? (
        <MeetupList
          data={meetups}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Meetup
              meetup={item}
              disabled={item.disabled}
              action={{
                name: 'Realizar inscrição',
                call: async () => subscribe(item),
              }}
            />
          )}
        />
      ) : (
        <Info>
          <Icon name="clear" color="#fff" size={60} />
          <InfoText>Nenhum meetup encontrado.</InfoText>
        </Info>
      )}
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="format-list-bulleted" size={20} color={tintColor} />
  ),
};
