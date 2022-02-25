
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
    id: "2",
    options: [
      { value: 1, label: "Networking", trigger: "5" },
      { value: 2, label: "Performance", trigger: "6" },
      { value: 3, label: "Security", trigger: "7" },
      { value: 4, label: "Integration", trigger: "8" },
      { value: 5, label: "Go back", trigger: "1" },
    ],
  },
  {
    id: "3",
    options: [
      { value: 1, label: "Capacity Management", trigger: "9" },
      { value: 2, label: "NFS/SMB", trigger: "10" },
      { value: 3, label: "Application Volume Group", trigger: "11" },
      { value: 4, label: "Go back", trigger: "1" },
    ],
  },
  {
    id: "4",
    options: [
      { value: 1, label: "Data Migration", trigger: "12" },
      { value: 2, label: "Backups", trigger: "13" },
      { value: 3, label: "Snapshots", trigger: "14" },
      { value: 4, label: "Go back", trigger: "1" },
    ],
  },
  {
    id: "5",
    options: [
      { value: 1, label: "Can I connect a VNet that I already created to the Azure NetApp Files service?", trigger: "15" },
      { value: 2, label: "Can I set or select my own IP address for an Azure NetApp Files volume?", trigger: "16" },
      { value: 3, label: "Can I mount an NFS volume of Azure NetApp Files using DNS FQDN name?", trigger: "17" },
      { value: 4, label: "Go back", trigger: "2" },
    ],
  },
  {
    id: "6",
    options: [
      { value: 1, label: "How do I change the service level of a volume?", trigger: "18" },
      { value: 2, label: "How do I convert throughput-based service levels of Azure NetApp Files to IOPS?", trigger: "19" },
      { value: 3, label: "What should I do to optimize or tune Azure NetApp Files performance?", trigger: "20" },
      { value: 4, label: "Go back", trigger: "2" },
    ],
  },
  {
    id: "7",
    options: [
      { value: 1, label: "Can the storage be encrypted at rest?", trigger: "21" },
      { value: 2, label: "Can I use Azure RBAC with Azure NetApp Files?", trigger: "22" },
      { value: 3, label: "When I delete an Azure NetApp Files volume, is the data deleted safely?", trigger: "23" },
      { value: 4, label: "Go back", trigger: "2" },
    ],
  },
  {
    id: "8",
    options: [
      { value: 1, label: "Does Azure NetApp Files work with Azure Policy?", trigger: "24" },
      { value: 2, label: "Can I use Azure NetApp Files NFS or SMB volumes with Azure VMware Solution (AVS)?", trigger: "25" },
      { value: 3, label: "What regions are supported for using Azure NetApp Files NFS or SMB volumes with Azure VMware Solution (AVS)?", trigger: "26" },
      { value: 4, label: "Go back", trigger: "2" },
    ],
  },
  {
    id: "9",
    options: [
      { value: 1, label: "How do I determine if a directory is approaching the limit size?", trigger: "27" },
      { value: 2, label: "Can I manage Azure NetApp Files through Azure Storage Explorer?", trigger: "28" },
      { value: 3, label: "How do I monitor usage for capacity pool and volume of Azure NetApp Files?", trigger: "29" },
      { value: 4, label: "Go back", trigger: "3" },
    ],
  },
  {
    id: "10",
    options: [
      { value: 1, label: "What NFS version does Azure NetApp Files support?", trigger: "30" },
      { value: 2, label: "Which SMB versions are supported by Azure NetApp Files?", trigger: "31" },
      { value: 3, label: "How can I obtain the IP address of an SMB volume via the portal?", trigger: "32" },
      { value: 4, label: "Go back", trigger: "3" },
    ],
  },
  {
    id: "11",
    options: [
      { value: 1, label: "Why do I have to use a manual QoS capacity pool for all of my volumes?", trigger: "33" },
      { value: 2, label: "What snapshot policy should I use for my HANA volumes?", trigger: "34" },
      { value: 3, label: "Why can’t I edit the volume group description?", trigger: "35" },
      { value: 4, label: "Go back", trigger: "3" },
    ],
  },
  {
    id: "12",
    options: [
      { value: 1, label: "Where does Azure NetApp Files store customer data?", trigger: "36" },
      { value: 2, label: "Is migration with Azure Import/Export service supported?", trigger: "37" },
      { value: 3, label: "Is migration with Azure Data Box supported?", trigger: "38" },
      { value: 4, label: "Go back", trigger: "4" },
    ],
  },
  {
    id: "13",
    options: [
      { value: 1, label: "What happens if a backup operation encounters a problem?", trigger: "39" },
      { value: 2, label: "Can I change the location or storage tier of my backup vault?", trigger: "40" },
      { value: 3, label: "What types of security are provided for the backup data?", trigger: "41" },
      { value: 4, label: "Go back", trigger: "4" },
    ],
  },
  {
    id: "14",
    options: [
      { value: 1, label: "What are different ways to restore data from snapshots?", trigger: "42" },
      { value: 2, label: "How to modify a snapshot policy?", trigger: "43" },
      { value: 3, label: " What are different error conditions and resolutions in snapshot policy?", trigger: "44" },
      { value: 4, label: "Go back", trigger: "4" },
    ],
  },
  {
    id: "15",
    message: "abc",
    trigger: 45,
  },
  {
    id: "16", 
    message: "No. IP assignment to Azure NetApp Files volumes is dynamic. Static IP assignment is not supported.",
    trigger: 45,
  },
  {
    id: "17",
    message: "Yes, you can, if you create the required DNS entries. Azure NetApp Files supplies the service IP for the provisioned volume.",
    trigger: 45,
  },
  {
    id: "18",
    message: "a",
    trigger: 45,
  },
  {
    id: "19",
    message: "a",
    trigger: 45,
  },
  {
    id: "20",
    message: "a",
    trigger: 45,
  },
  {
    id: "21",
    message: "All Azure NetApp Files volumes are encrypted using the FIPS 140-2 standard. All keys are managed by the Azure NetApp Files service.",
    trigger: 45,
  },
  {
    id: "22",
    message: "a",
    trigger: 45,
  },
  {
    id: "23",
    message: "Deletion of an Azure NetApp Files volume is performed programmatically with immediate effect. The delete operation includes deleting keys used for encrypting data at rest. There is no option for any scenario to recover a deleted volume once the delete operation is executed successfully (via interfaces such as the Azure portal and the API.)",
    trigger: 45,
  },
  {
    id: "24",
    message: "a",
    trigger: 45,
  },
  {
    id: "25",
    message: "a",
    trigger: 45,
  },
  {
    id: "26",
    message: "a",
    trigger: 45,
  },
  {
    id: "27",
    message: "a",
    trigger: 45,
  },
  {
    id: "28",
    message: "No. Azure NetApp Files is not supported by Azure Storage Explorer.",
    trigger: 45,
  },
  {
    id: "29",
    message: "a",
    trigger: 45,
  },
  {
    id: "30",
    message: "Azure NetApp Files supports NFSv3 and NFSv4.1. You can create a volume using either NFS version.",
    trigger: 45,
  },
  {
    id: "31",
    message: "Azure NetApp Files supports SMB 2.1 and SMB 3.1 (which includes support for SMB 3.0).",
    trigger: 45,
  },
  {
    id: "32",
    message: "Use the JSON View link on the volume overview pane, and look for the startIp identifier under properties -> mountTargets.",
    trigger: 45,
  },
  {
    id: "33",
    message: "Manual QoS capacity pool provides the best way to define capacity and throughput individually to fit the SAP HANA needs. It avoids over-provisioning to reach the performance of, for example, the log volume or data volume. It can also reserve larger space for log-backups while keeping the performance to a value that suits your needs. Overall, using manual QoS capacity pool results in a price reduction.",
    trigger: 45,
  },
  {
    id: "34",
    message: "a",
    trigger: 45,
  },
  {
    id: "35",
    message: "In the current implementation, the application volume group has a focus on the initial creation and deletion of a volume group only.",
    trigger: 45,
  },
  {
    id: "36",
    message: "a",
    trigger: 45,
  },
  {
    id: "37",
    message: "No. Azure Import/Export service does not support Azure NetApp Files currently.",
    trigger: 45,
  },
  {
    id: "38",
    message: "No. Azure Data Box does not support Azure NetApp Files currently.",
    trigger: 45,
  },
  {
    id: "39",
    message: "If a problem occurs during a backup operation, Azure NetApp Files backup automatically retries the operation, without requiring user interaction. If the retries continue to fail, Azure NetApp Files backup will report the failure of the operation.",
    trigger: 45,
  },
  {
    id: "40",
    message: "No, Azure NetApp Files automatically manages the backup data location within Azure storage. This location or Azure storage tier cannot be modified by the user.",
    trigger: 45,
  },
  {
    id: "41",
    message: "Azure NetApp Files uses AES-256 bit encryption during the encoding of the received backup data. In addition, the encrypted data is securely transmitted to Azure storage using HTTPS TLSv1.2 connections. Azure NetApp Files backup depends on the Azure Storage account’s built-in encryption at rest functionality for storing the backup data.",
    trigger: 45,
  },
  {
    id: "42",
    message: "a",
    trigger: 45,
  },
  {
    id: "43",
    message: "a",
    trigger: 45,
  },
  {
    id: "44",
    message: "a",
    trigger: 45,
  },
  {
    id: "45",
    message: "Thank You for using the NetApp self heal boat.",
    trigger: 46
  },
  {
    id: "46",
    options: [
      { value: 1, label: "Want to debug any other issue?", trigger: "1" },
    ],
  },
  
];
