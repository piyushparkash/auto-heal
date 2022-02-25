// eslint-disable-next-line no-undef
// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    id: "1",
    options: [
      { value: 1, label: "NetappAccount", trigger: "2" },
      { value: 2, label: "Volumes", trigger: "3" },
      { value: 3, label: "Data Protection", trigger: "4" },
    ],
  },
  {
    id: "3",
    message: "Welcome to volumes",
    end: true,
  },
  {
    id: "4",
    message: "Welcome to Data protection",
    end: true,
  },
  {
    id: "2",
    options: [
      { value: 1, label: "Networking", trigger: "5" },
      { value: 2, label: "Performance", trigger: "6" },
      { value: 3, label: "Security", trigger: "7" },
      { value: 4, label: "Integration", trigger: "8" },
    ],
  },
  {
    id: "5",
      component: (
        <div>
          <p>This is your answer</p>
          <a> Can I connect a VNet that I already created to the Azure NetApp Files service?</a>
        </div>
      ),
    end: true,
  },
  {
    id: "6",
    message:
      "Can I set or select my own IP address for an Azure NetApp Files volume?",
    end: true,
  },
  {
    id: "7",
    message:
      "Can I mount an NFS volume of Azure NetApp Files using DNS FQDN name?",
    end: true,
  },
  {
    id: "8",
    message:
      "Can I mount an NFS volume of Azure NetApp Files using DNS FQDN name?",
    end: true,
  },
];
