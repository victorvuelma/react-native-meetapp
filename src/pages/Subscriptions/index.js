import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';

import { parseISO, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import Background from '~/components/Background';
import Meetup from '~/components/Meetup';

import { MeetupList, Info, InfoText } from './styles';

export default function Subscriptions() {
  const [loading, setLoading] = useState(true);
  const [subscriptions, setSubscriptions] = useState([]);

  async function loadSubscriptions() {
    setLoading(true);

    const response = await api.get('subscriptions');

    const data = response.data.map(sub => ({
      ...sub,
      meetup: {
        ...sub.meetup,
        dateFormatted: format(
          parseISO(sub.meetup.date),
          "dd 'de' MMMM', às 'HH'h'",
          {
            locale: ptBR,
          },
        ),
      },
    }));

    setSubscriptions(data);
    setLoading(false);
  }

  useEffect(() => {
    loadSubscriptions();
  }, []);

  async function cancelSubscription(meetup) {
    await api.delete(`meetups/${meetup.id}/subscription`);

    setSubscriptions(
      subscriptions.map(s => {
        if (s.meetup.id === meetup.id) {
          return { ...s, disabled: true };
        }
        return s;
      }),
    );
  }

  return (
    <Background>
      {loading ? (
        <Info>
          <ActivityIndicator color="#fff" size="large" />
        </Info>
      ) : subscriptions.length ? (
        <MeetupList
          data={subscriptions}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Meetup
              meetup={item.meetup}
              disabled={item.disabled}
              action={{
                name: 'Cancelar inscrição',
                call: () => cancelSubscription(item.meetup),
              }}
            />
          )}
        />
      ) : (
        <Info>
          <Icon name="clear" color="#fff" size={60} />
          <InfoText>Nenhuma inscrição encontrada.</InfoText>
        </Info>
      )}
    </Background>
  );
}

Subscriptions.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="local-offer" size={20} color={tintColor} />
  ),
};
