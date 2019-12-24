import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Image,
  Info,
  Title,
  DetailsList,
  DetailsItem,
  DetailsText,
  ActionButton,
} from './styles';

export default function Meetup({ meetup, loading, action, disabled }) {
  return (
    <Container>
      <Image source={{ uri: meetup.image.url }} />
      <Info disabled={disabled}>
        <Title>{meetup.title}</Title>

        <DetailsList>
          <DetailsItem>
            <Icon color="#999" size={18} name="event" />
            <DetailsText>{meetup.dateFormatted}</DetailsText>
          </DetailsItem>
          <DetailsItem>
            <Icon color="#999" size={18} name="place" />
            <DetailsText>{meetup.location}</DetailsText>
          </DetailsItem>
          <DetailsItem>
            <Icon color="#999" size={18} name="person" />
            <DetailsText>Organizador: {meetup.user.name}</DetailsText>
          </DetailsItem>
        </DetailsList>

        <ActionButton loading={loading} onPress={action.call}>
          {action.name}
        </ActionButton>
      </Info>
    </Container>
  );
}

Meetup.propTypes = {
  loading: PropTypes.bool,
  meetup: PropTypes.shape({
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    dateFormatted: PropTypes.string.isRequired,
    image: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }).isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  action: PropTypes.shape({
    name: PropTypes.string.isRequired,
    call: PropTypes.func,
  }),
  disabled: PropTypes.bool,
};

Meetup.defaultProps = {
  loading: false,
  action: {
    call: () => {},
  },
  disabled: false,
};
