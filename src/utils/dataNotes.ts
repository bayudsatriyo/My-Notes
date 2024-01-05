const getInitialData = () => {
  return [
    {
      id: 1,
      title: "My First Note",
      body: "My Note adalah website yang mampu menyimpan seluruh catatan user, tidak hanya itu My Note juga mampu memilah Note Utama dan Note yang ingin Diarsipkan. Ketika ada Note yang sudah tidak diinginkan, kalian bisa menghapusnya",
      createdAt: "2024-01-05T04:27:34.572Z",
      archived: false,
    },
  ];
};

const showFormattedDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("id-ID", options);
};

export { getInitialData, showFormattedDate };
