// export const messages = [
// {
//   id: "1",
//   content: "Test 1",
//   createdAt: new Date(Date.now() - 60 * 1000 * 1000),
// },
// {
//   id: "2",
//   content: "Test 2",
//   createdAt: new Date(Date.now() - 2 * 60 * 1000 * 1000),
// },
// {
//   id: "3",
//   content: "Test 3",
//   createdAt: new Date(Date.now() - 24 * 60 * 1000 * 1000),
// },
// {
//   id: "4",
//   content: "Test 4",
//   createdAt: new Date(Date.now() - 14 * 24 * 60 * 1000 * 1000),
// },
// ];

// export const chats = [
// {
//   id: "1",
//   name: "roby mis",
//   picture: "https://randomuser.me/api/portraits/thumb/men/1.jpg",
//   messages: ["1"],
// },
// {
//   id: "2",
//   name: "david mis",
//   picture: "https://randomuser.me/api/portraits/thumb/men/2.jpg",
//   messages: ["2"],
// },
// {
//   id: "3",
//   name: "fani mis",
//   picture: "https://randomuser.me/api/portraits/thumb/women/1.jpg",
//   messages: ["3"],
// },
// {
//   id: "4",
//   name: "hendry mis",
//   picture: "https://randomuser.me/api/portraits/thumb/men/3.jpg",
//   messages: ["4"],
// },
// ];

export type Message = {
  id: string;
  content: string;
  createdAt: Date;
};
export type Chat = {
  id: string;
  name: string;
  picture: string;
  messages: string[];
};

export const messages: Message[] = [
  {
    id: "1",
    content: "You on your way?",
    createdAt: new Date(new Date("1-1-2019").getTime() - 60 * 1000 * 1000),
  },
];
export const chats: Chat[] = [
  {
    id: "1",
    name: "Ethan Gonzalez",
    picture: "https://randomuser.me/api/portraits/thumb/men/1.jpg",
    messages: ["1"],
  },
];

export const resetDb = () => {
  messages.splice(
    0,
    Infinity,
    ...[
      {
        id: "1",
        content: "Test 1",
        createdAt: new Date(Date.now() - 60 * 1000 * 1000),
      },
      {
        id: "2",
        content: "Test 2",
        createdAt: new Date(Date.now() - 2 * 60 * 1000 * 1000),
      },
      {
        id: "3",
        content: "Test 3",
        createdAt: new Date(Date.now() - 24 * 60 * 1000 * 1000),
      },
      {
        id: "4",
        content: "Test 4",
        createdAt: new Date(Date.now() - 14 * 24 * 60 * 1000 * 1000),
      },
    ]
  );

  chats.splice(
    0,
    Infinity,
    ...[
      {
        id: "1",
        name: "christ",
        picture: "https://randomuser.me/api/portraits/thumb/men/1.jpg",
        messages: ["1"],
      },
      {
        id: "2",
        name: "hendry",
        picture: "https://randomuser.me/api/portraits/thumb/men/2.jpg",
        messages: ["2"],
      },
      {
        id: "3",
        name: "odi",
        picture: "https://randomuser.me/api/portraits/thumb/women/1.jpg",
        messages: ["3"],
      },
      {
        id: "4",
        name: "Joshua",
        picture: "https://randomuser.me/api/portraits/thumb/women/2.jpg",
        messages: ["4"],
      },
    ]
  );
};

resetDb();
