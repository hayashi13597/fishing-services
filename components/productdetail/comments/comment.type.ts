export interface ICommentItem {
  id: string;
  user: {
    id: string;
    fullname: string;
    avatar: string;
  };
  product_id: string;
  comment: string;
  visiable: boolean;
  created_at: string;
  updated_at: string;
}
export const initChat = [
  {
    id: "saddsadsa",
    user: {
      id: "fdafdsfds",
      fullname: "Phạm hoài nam",
      avatar: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(11).webp",
    },
    product_id: "asdsadsa",
    comment: "asdsadsa",
    visiable: false,
    created_at: "2023-08-13T02:05:30.934+00:00",
    updated_at: "2023-08-13T02:05:30.934+00:00",
  },
  {
    id: "321",
    user: {
      id: "fdafdsfds",
      fullname: "Phạm hoài nam",
      avatar: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(11).webp",
    },
    product_id: "asdsadsa",
    comment: "asdsadsa",
    visiable: false,
    created_at: "2023-08-13T02:05:30.934+00:00",
    updated_at: "2023-08-13T02:05:30.934+00:00",
  },
  {
    id: "dsadsadsa",
    user: {
      id: "fdafdsfds",
      fullname: "Phạm hoài nam",
      avatar: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(11).webp",
    },
    product_id: "asdsadsa",
    comment: "asdsadsa",
    visiable: true,
    created_at: "2023-08-13T02:05:30.934+00:00",
    updated_at: "2023-08-13T02:05:30.934+00:00",
  },
  {
    id: "dsadsa3223",
    user: {
      id: "fdafdsfds",
      fullname: "Phạm hoài nam",
      avatar: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(11).webp",
    },
    product_id: "asdsadsa",
    comment: "asdsadsa",
    visiable: false,
    created_at: "2023-08-13T02:05:30.934+00:00",
    updated_at: "2023-08-13T02:05:30.934+00:00",
  },
];
