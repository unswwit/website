import AddToCalendarHOC from 'react-add-to-calendar-hoc';
import styles from '../styles/AddToCal.module.css';

interface Details {
  title: string,
  description: string,
  location: string,
  startDate: string,
  endDate: string,
  duration: string
};

const AddToCalBtn = ({
  title,
  description,
  location,
  startDate,
  endDate,
  duration,
}: Details) => {
  const start = new Date();
  let end = new Date();
  end.setHours(start.getHours() + 1);
  const startDefaultString = start
    .toLocaleString('sv')
    .split('.')[0]
    .replaceAll(/[Z:-]/g, '')
    .replaceAll(' ', 'T');
  const endDefaultString = end
    .toLocaleString('sv')
    .split('.')[0]
    .replaceAll(/[Z:-]/g, '')
    .replaceAll(' ', 'T');

  let event = {
    title: title,
    description: description,
    location: location,
    duration: duration ? duration : '0100',
    timezone: 'Australia/Sydney',
    startDatetime: startDate ? startDate : startDefaultString,
    endDatetime: endDate ? endDate : endDefaultString,
  };

  function Dropdown({ children }: any) {
    return <div className={styles.dropItems}>{children}</div>;
  }

  function Button({ children, onClick }: any) {
    return (
      <button className={styles.button} onClick={onClick}>
        {children}
      </button>
    );
  }

  const AddToCalendarDropdown = AddToCalendarHOC(Button, Dropdown);

  return (
    <AddToCalendarDropdown
      className={styles.componentStyles}
      buttonText="Add to Calendar"
      event={event}
      linkProps={{
        className: styles.link,
      }}
    />
  );
};

export default AddToCalBtn;
