import apiClient from "..";

const ContactApi = {
  path: "/contact/",
  create(data: {
    email: string;
    fullname: string;
    phone: string;
    content: string;
  }) {
    return apiClient.post(this.path, {
      data,
    });
  },
};

export default ContactApi;
