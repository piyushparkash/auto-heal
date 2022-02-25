// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    id: "1",
    options: [
      { value: 1, label: "NetappAccount", trigger: "2" },
      { value: 2, label: "Volumes", trigger: "3" },
      { value: 3, label: "Data Protection", trigger: "4" },
      { value: 4, label: "Not what you are looking for?", trigger: "47" },
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
      {
        value: 1,
        label:
          "Can I connect a VNet that I already created to the Azure NetApp Files service?",
        trigger: "15",
      },
      {
        value: 2,
        label:
          "Can I set or select my own IP address for an Azure NetApp Files volume?",
        trigger: "16",
      },
      {
        value: 3,
        label:
          "Can I mount an NFS volume of Azure NetApp Files using DNS FQDN name?",
        trigger: "17",
      },
      { value: 4, label: "Go back", trigger: "2" },
    ],
  },
  {
    id: "6",
    options: [
      {
        value: 1,
        label: "How do I change the service level of a volume?",
        trigger: "18",
      },
      {
        value: 2,
        label:
          "How do I convert throughput-based service levels of Azure NetApp Files to IOPS?",
        trigger: "19",
      },
      {
        value: 3,
        label:
          "What should I do to optimize or tune Azure NetApp Files performance?",
        trigger: "20",
      },
      { value: 4, label: "Go back", trigger: "2" },
    ],
  },
  {
    id: "7",
    options: [
      {
        value: 1,
        label: "Can the storage be encrypted at rest?",
        trigger: "21",
      },
      {
        value: 2,
        label: "Can I use Azure RBAC with Azure NetApp Files?",
        trigger: "22",
      },
      {
        value: 3,
        label:
          "When I delete an Azure NetApp Files volume, is the data deleted safely?",
        trigger: "23",
      },
      { value: 4, label: "Go back", trigger: "2" },
    ],
  },
  {
    id: "8",
    options: [
      {
        value: 1,
        label: "Does Azure NetApp Files work with Azure Policy?",
        trigger: "24",
      },
      {
        value: 2,
        label:
          "Can I use Azure NetApp Files NFS or SMB volumes with Azure VMware Solution (AVS)?",
        trigger: "25",
      },
      {
        value: 3,
        label:
          "What regions are supported for using Azure NetApp Files NFS or SMB volumes with Azure VMware Solution (AVS)?",
        trigger: "26",
      },
      { value: 4, label: "Go back", trigger: "2" },
    ],
  },
  {
    id: "9",
    options: [
      {
        value: 1,
        label:
          "How do I determine if a directory is approaching the limit size?",
        trigger: "27",
      },
      {
        value: 2,
        label:
          "Can I manage Azure NetApp Files through Azure Storage Explorer?",
        trigger: "28",
      },
      {
        value: 3,
        label:
          "How do I monitor usage for capacity pool and volume of Azure NetApp Files?",
        trigger: "29",
      },
      { value: 4, label: "Go back", trigger: "3" },
    ],
  },
  {
    id: "10",
    options: [
      {
        value: 1,
        label: "What NFS version does Azure NetApp Files support?",
        trigger: "30",
      },
      {
        value: 2,
        label: "Which SMB versions are supported by Azure NetApp Files?",
        trigger: "31",
      },
      {
        value: 3,
        label:
          "How can I obtain the IP address of an SMB volume via the portal?",
        trigger: "32",
      },
      { value: 4, label: "Go back", trigger: "3" },
    ],
  },
  {
    id: "11",
    options: [
      {
        value: 1,
        label:
          "Why do I have to use a manual QoS capacity pool for all of my volumes?",
        trigger: "33",
      },
      {
        value: 2,
        label: "What snapshot policy should I use for my HANA volumes?",
        trigger: "34",
      },
      {
        value: 3,
        label: "Why can’t I edit the volume group description?",
        trigger: "35",
      },
      { value: 4, label: "Go back", trigger: "3" },
    ],
  },
  {
    id: "12",
    options: [
      {
        value: 1,
        label: "Where does Azure NetApp Files store customer data?",
        trigger: "36",
      },
      {
        value: 2,
        label: "Is migration with Azure Import/Export service supported?",
        trigger: "37",
      },
      {
        value: 3,
        label: "Is migration with Azure Data Box supported?",
        trigger: "38",
      },
      { value: 4, label: "Go back", trigger: "4" },
    ],
  },
  {
    id: "13",
    options: [
      {
        value: 1,
        label: "What happens if a backup operation encounters a problem?",
        trigger: "39",
      },
      {
        value: 2,
        label: "Can I change the location or storage tier of my backup vault?",
        trigger: "40",
      },
      {
        value: 3,
        label: "What types of security are provided for the backup data?",
        trigger: "41",
      },
      { value: 4, label: "Go back", trigger: "4" },
    ],
  },
  {
    id: "14",
    options: [
      {
        value: 1,
        label: "What are different ways to restore data from snapshots?",
        trigger: "42",
      },
      { value: 2, label: "How to modify a snapshot policy?", trigger: "43" },
      {
        value: 3,
        label:
          " What are different error conditions and resolutions in snapshot policy?",
        trigger: "44",
      },
      { value: 4, label: "Go back", trigger: "4" },
    ],
  },
  {
    id: "15",
    component: (
      <div>
        <p>
          Yes, you can connect VNets that you created to the service. See{" "}
          <a
            href="https://docs.microsoft.com/en-us/azure/azure-netapp-files/azure-netapp-files-network-topologies"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Guidelines for Azure NetApp Files{" "}
          </a>{" "}
          network planning for details.
        </p>
      </div>
    ),
    trigger: 45,
  },
  {
    id: "16",
    message:
      "No. IP assignment to Azure NetApp Files volumes is dynamic. Static IP assignment is not supported.",
    trigger: 45,
  },
  {
    id: "17",
    message:
      "Yes, you can, if you create the required DNS entries. Azure NetApp Files supplies the service IP for the provisioned volume.",
    trigger: 45,
  },
  {
    id: "18",
    component: (
      <div>
        <p>
          You can change the service level of an existing volume by moving the
          volume to another capacity pool that uses the service level you want
          for the volume. See{" "}
          <a
            href="https://docs.microsoft.com/en-us/azure/azure-netapp-files/dynamic-change-volume-service-level"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Dynamically change the service level of a volume{" "}
          </a>
        </p>
      </div>
    ),
    trigger: 45,
  },
  {
    id: "19",
    message:
      "You can convert MB/s to IOPS by using the following formula: IOPS = (MBps Throughput / KB per IO) * 1024",
    trigger: 45,
  },
  {
    id: "20",
    component: (
      <div>
        <p>
          You can take the following actions per the performance requirements:
        </p>
        <ul>
          <li>Ensure that the Virtual Machine is sized appropriately.</li>
          <li>Enable Accelerated Networking for the VM.</li>
          <li>
            Select the desired service level and size for the capacity pool.
          </li>
          <li>
            Create a volume with the desired quota size for the capacity and
            performance.
          </li>
        </ul>
      </div>
    ),
    trigger: 45,
  },
  {
    id: "21",
    message:
      "All Azure NetApp Files volumes are encrypted using the FIPS 140-2 standard. All keys are managed by the Azure NetApp Files service.",
    trigger: 45,
  },
  {
    id: "22",
    component: (
      <div>
        <p>
          Yes, Azure NetApp Files supports Azure RBAC features. Along with the
          built-in Azure roles, you can{" "}
          <a
            href="https://docs.microsoft.com/en-us/azure/role-based-access-control/custom-roles"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            create custom roles{" "}
          </a>{" "}
          for Azure NetApp Files. For the complete list of Azure NetApp Files
          permissions, see Azure resource provider operations for{" "}
          <a
            href="https://docs.microsoft.com/en-us/azure/role-based-access-control/resource-provider-operations#microsoftnetapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Microsoft.Netapp{" "}
          </a>
          .
        </p>
      </div>
    ),
    trigger: 45,
  },
  {
    id: "23",
    message:
      "Deletion of an Azure NetApp Files volume is performed programmatically with immediate effect. The delete operation includes deleting keys used for encrypting data at rest. There is no option for any scenario to recover a deleted volume once the delete operation is executed successfully (via interfaces such as the Azure portal and the API.)",
    trigger: 45,
  },
  {
    id: "24",
    component: (
      <div>
        <p>
          Yes. Azure NetApp Files is a first-party service. It fully adheres to
          Azure Resource Provider standards. As such, Azure NetApp Files can be
          integrated into Azure Policy via custom policy definitions. For
          information about how to implement custom policies for Azure NetApp
          Files, see{" "}
          <a
            href="https://techcommunity.microsoft.com/t5/azure/azure-policy-now-available-for-azure-netapp-files/m-p/2282258"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Azure Policy now available for Azure NetApp Files{" "}
          </a>{" "}
          on Microsoft Tech Community.
        </p>
      </div>
    ),
    trigger: 45,
  },
  {
    id: "25",
    component: (
      <div>
        <p>
          You can mount Azure NetApp Files NFS volumes on AVS Windows VMs or
          Linux VMs. You can map Azure NetApp Files SMB shares on AVS Windows
          VMs. For more information, see{" "}
          <a
            href="https://docs.microsoft.com/en-us/azure/azure-vmware/netapp-files-with-azure-vmware-solution"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Azure NetApp Files with Azure VMware Solution.{" "}
          </a>
          .
        </p>
      </div>
    ),
    trigger: 45,
  },
  {
    id: "26",
    component: (
      <div>
        <p>
          Using Azure NetApp Files NFS or SMB volumes with AVS for Guest OS
          mounts is supported in{" "}
          <a
            href="https://azure.microsoft.com/global-infrastructure/services/?products=azure-vmware,netapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            all AVS and ANF enabled regions
          </a>
          .
        </p>
      </div>
    ),
    trigger: 45,
  },
  {
    id: "27",
    component: (
      <div>
        <p>
          You can use the stat command from a client to see whether a directory
          is approaching the{" "}
          <a
            href="https://docs.microsoft.com/en-us/azure/azure-netapp-files/azure-netapp-files-resource-limits#resource-limits"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            maximum size limit{" "}
          </a>{" "}
          for directory metadata (320 MB). See{" "}
          <a
            href="https://docs.microsoft.com/en-us/azure/azure-netapp-files/azure-netapp-files-resource-limits#directory-limit"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Resource limits for Azure NetApp Files{" "}
          </a>{" "}
          for the limit and calculation.
        </p>
      </div>
    ),
    trigger: 45,
  },
  {
    id: "28",
    message:
      "No. Azure NetApp Files is not supported by Azure Storage Explorer.",
    trigger: 45,
  },
  {
    id: "29",
    component: (
      <div>
        <p>
          Azure NetApp Files provides capacity pool and volume usage metrics.
          You can also use Azure Monitor to monitor usage for Azure NetApp
          Files. See{" "}
          <a
            href="https://docs.microsoft.com/en-us/azure/azure-netapp-files/azure-netapp-files-metrics "
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Metrics for Azure NetApp Files
          </a>{" "}
          for details.
        </p>
      </div>
    ),
    trigger: 45,
  },
  {
    id: "30",
    message:
      "Azure NetApp Files supports NFSv3 and NFSv4.1. You can create a volume using either NFS version.",
    trigger: 45,
  },
  {
    id: "31",
    message:
      "Azure NetApp Files supports SMB 2.1 and SMB 3.1 (which includes support for SMB 3.0).",
    trigger: 45,
  },
  {
    id: "32",
    message:
      "Use the JSON View link on the volume overview pane, and look for the startIp identifier under properties -> mountTargets.",
    trigger: 45,
  },
  {
    id: "33",
    message:
      "Manual QoS capacity pool provides the best way to define capacity and throughput individually to fit the SAP HANA needs. It avoids over-provisioning to reach the performance of, for example, the log volume or data volume. It can also reserve larger space for log-backups while keeping the performance to a value that suits your needs. Overall, using manual QoS capacity pool results in a price reduction.",
    trigger: 45,
  },
  {
    id: "34",
    component: (
      <div>
        <p>
          This question isn’t directly related to application volume group for
          SAP HANA. As a short answer, you can use products such as AzAcSnap or
          Commvault for an application-consistent backup for your HANA
          environment. You cannot use the standard snapshots scheduled by the
          Azure NetApp Files built-in snapshot policy for a consistent backup of
          your HANA database. General recommendations for snapshots in an SAP
          HANA environment are as follows:
        </p>
        <ul>
          <li>
            Closely monitor the data volume snapshots. HANA tends to have a high
            change rate. Keeping snapshots for a long period might increase your
            capacity needs. Be sure to monitor the used capacity vs. allocated
            capacity.
          </li>
          <li>
            If you automatically create snapshots for your (log and file)
            backups, be sure to monitor their retention to avoid unpredicted
            volume growth.
          </li>
        </ul>
      </div>
    ),
    trigger: 45,
  },
  {
    id: "35",
    message:
      "In the current implementation, the application volume group has a focus on the initial creation and deletion of a volume group only.",
    trigger: 45,
  },
  {
    id: "36",
    component: (
      <div>
        <p>
          {" "}
          By default, your data stays within the region where you deploy your
          Azure NetApp Files volumes. However, you can choose to replicate your
          data on a volume-by-volume basis to available destination regions
          using{" "}
          <a
            href="https://docs.microsoft.com/en-us/azure/azure-netapp-files/cross-region-replication-introduction"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            cross-region replication{" "}
          </a>
          .
        </p>
      </div>
    ),
    trigger: 45,
  },
  {
    id: "37",
    message:
      "No. Azure Import/Export service does not support Azure NetApp Files currently.",
    trigger: 45,
  },
  {
    id: "38",
    message:
      "No. Azure Data Box does not support Azure NetApp Files currently.",
    trigger: 45,
  },
  {
    id: "39",
    message:
      "If a problem occurs during a backup operation, Azure NetApp Files backup automatically retries the operation, without requiring user interaction. If the retries continue to fail, Azure NetApp Files backup will report the failure of the operation.",
    trigger: 45,
  },
  {
    id: "40",
    message:
      "No, Azure NetApp Files automatically manages the backup data location within Azure storage. This location or Azure storage tier cannot be modified by the user.",
    trigger: 45,
  },
  {
    id: "41",
    message:
      "Azure NetApp Files uses AES-256 bit encryption during the encoding of the received backup data. In addition, the encrypted data is securely transmitted to Azure storage using HTTPS TLSv1.2 connections. Azure NetApp Files backup depends on the Azure Storage account’s built-in encryption at rest functionality for storing the backup data.",
    trigger: 45,
  },
  {
    id: "42",
    component: (
      <div>
        <p>
          The Azure NetApp Files snapshot technology greatly improves the
          frequency and reliability of backups. It incurs minimal performance
          overhead and can be safely created on an active volume. Azure NetApp
          Files snapshots allow near-instantaneous, secure, and optionally
          user-managed restores. This section describes various ways in which
          data can be accessed or restored from Azure NetApp Files snapshots.
        </p>
        <ul>
          <li>Restoring (cloning) an online snapshot to a new volume</li>
          <li>Restoring (reverting) an online snapshot in-place</li>
          <li>
            Restoring files or directories from online snapshots using a client
          </li>
          <li>
            Restoring files or directories from online snapshots using
            single-file snapshot restore
          </li>
          <li>Restoring volume backups from vaulted snapshots</li>
        </ul>
      </div>
    ),
    trigger: 45,
  },
  {
    id: "43",
    component: (
      <div>
        <p>
          You can modify an existing snapshot policy to change the policy state,
          snapshot frequency (hourly, daily, weekly, or monthly), or number of
          snapshots to keep.
        </p>
        <ul>
          <li>From the NetApp Account view, click Snapshot policy.</li>
          <li>
            Right-click the snapshot policy you want to modify, then select
            Edit.
          </li>
        </ul>
      </div>
    ),
    trigger: 45,
  },
  {
    id: "44",
    component: (
      <div>
        <p>
          <a
            href="https://docs.microsoft.com/en-us/azure/azure-netapp-files/troubleshoot-snapshot-policies"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Troubleshoot snapshot policy errors{" "}
          </a>
        </p>
      </div>
    ),
    trigger: 45,
  },
  {
    id: "45",
    message: "Thank You for using the NetApp self heal bot!",
    trigger: 46,
  },
  {
    id: "46",
    options: [
      {
        value: 1,
        label: "Would you like information on any other resource?",
        trigger: "1",
      },
    ],
  },
  {
    id: "47",
    message: "Can you please share the error that you are facing or describe the error?",
    trigger: 48,
  },
  {
    id: "48",
    message: "Something",
    user: true,
    trigger: function({ value, steps }) {
      debugger;
      let errorMsg =
        '"log": time="2020-10-21 05:04:04.300" level=info msg=Res method=GET url=/v2/Volumes/070d0d72-d82c-c893-8ce3-17894e56cea3 x-correlat';

      if (value.indexOf(errorMsg) > -1) {
        return 49;
      } else {
        return 50;
      }
    },
  },
  {
    id: "49",
    component: (
      <div>
        <a href="https://docs.microsoft.com/en-us/azure/azure-netapp-files/troubleshoot-volumes#errors-for-ldap-volumes">
        Error when creating an LDAP-enabled NFS volume
        </a>
      </div>
    ),
    trigger: 45
  },
  {
    id: "50",
    message: "Let me search it on the web!",
    trigger: function({ steps }) {
      setTimeout(() => {
        window.open(`https://www.google.com/search?q=${steps[48].value + " netapp"}`);
      }, 1500)
      return 45;
    },
  },
];
