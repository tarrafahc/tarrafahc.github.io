import React from "react";

const Calendar = () => {
  return (
    <div>
      <h1>Agenda do Tarrafa</h1>
      <p>Estamos querendo a migrar a nossa agenda para alguma alternativa.</p>
      <p>
        Contribua com a discussão na{" "}
        <a href="https://lists.riseup.net/www/info/tarrafahackerclube">
          lista de email
        </a>{" "}
        do Tarrafa.
      </p>
      <iframe
        title="calendar"
        src="https://calendar.google.com/calendar/embed?src=p1u60bfuqm5joi5eau3l37003o%40group.calendar.google.com&ctz=America%2FSao_Paulo"
        width="800"
        height="600"
        scrolling="no"
      />
    </div>
  );
};

export default Calendar;
