import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Dropdown } from '../dropdown';
import messages from './messages';

export default function MyTasksOrderDropdown({ className, setQuery, allQueryParams }) {
  const options = [
    {
      label: <FormattedMessage {...messages.recentlyEdited} />,
      value: '-action_date',
    },
    {
      label: <FormattedMessage {...messages.projectId} />,
      value: '-project_id',
    },
  ];

  const onSortSelect = (arr) => {
    if (arr.length === 1) {
      setQuery(
        {
          ...allQueryParams,
          page: undefined,
          orderBy: arr[0].value,
        },
        'pushIn',
      );
    } else if (arr.length > 1) {
      throw new Error('filter select array is bigger.');
    }
  };

  return (
    <Dropdown
      onChange={onSortSelect}
      options={options}
      value={`${allQueryParams.orderBy}` || []}
      display={<FormattedMessage {...messages.sortBy} />}
      className={`ba b--grey-light bg-white mr1 v-mid pv2 ${className || ''}`}
    />
  );
}
