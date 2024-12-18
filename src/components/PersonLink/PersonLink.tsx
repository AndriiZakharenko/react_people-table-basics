import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Person } from '../../types';

interface Props {
  person: Person;
}

export const PersonLink: React.FC<Props> = ({ person }) => {
  const { name, sex, slug } = person;

  return (
    <Link
      className={classNames({
        'has-text-danger': sex === 'f',
      })}
      to={`../${slug}`}
    >
      {name}
    </Link>
  );
};