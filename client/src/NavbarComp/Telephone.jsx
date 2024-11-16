import React from "react";

const policeData = [
  {
    name: "SH. SURENDRA SINGH YADAV, IPS",
    designation: "DGP, CHANDIGARH",
    phone: "0172 – 2740106",
    email: "dgp-chd@nic.in",
    address: "Chandigarh Police Headquarters, Sector 9-D, Chandigarh",
  },
  {
    name: "SH. RAJ KUMAR SINGH, IPS",
    designation: "IGP, CHANDIGARH",
    phone: "0172 – 2749900 / 0172 – 2740488",
    email: "igp-ut@chd.nic.in",
    address: "Chandigarh Police Headquarters, Sector 9-D, Chandigarh",
  },
  {
    name: "DIG, CHANDIGARH",
    designation: "DIG, CHANDIGARH",
    phone: "",
    email: "dig-chd@nic.in",
    address: "Chandigarh Police Headquarters, Sector 9-D, Chandigarh",
  },
  {
    name: "MS. KANWARDEEP KAUR, IPS",
    designation: "SSP, CHANDIGARH",
    phone: "0172 – 2760001",
    email: "pssput-chd@nic.in",
    address: "Chandigarh Police Headquarters, Sector 9-D, Chandigarh",
  },
  {
    name: "SH. MRIDUL, IPS",
    designation: "SP OPERATIONS AND SP CITY",
    phone: "0172 – 2924310 / 9779580906",
    email: "pssput-chd@nic.in",
    address: "Chandigarh Police Headquarters, Sector 9-D, Chandigarh",
  },
  {
    name: "GURMUKH SINGH (DSP)",
    designation: "SDPO, CENTRAL",
    phone: "0172 – 2700357",
    email: "psdpocent-chd@nic.in",
    address: "Police Station –17, Near Shivalik View Hotel, Sector – 17, Chandigarh",
  },
  {
    name: "INSPECTOR SARITA ROY",
    designation: "SHO, POLICE STATION - 17",
    phone: "9779580917 / 0172 – 2920993, 2700453",
    email: "pshops17-chd@nic.in",
    address: "Police Station –17, Near Shivalikvew Hotel, Sector 17, Chandigarh",
  },
  {
    name: "SUB. INSP.VIVEK KUMAR",
    designation: "INCHARGE, POLICE POST 22 OF POLICE STATION - 17",
    phone: "9779580922 / 0172 – 2928322, 2700319",
    email: "pp22-chd@nic.in",
    address: "Police Post 22, Sector 22, Chandigarh",
  },
  {
    name: "SUB. INSP.SATISH KUMAR",
    designation: "INCHARGE, POLICE POST NEELAM OF POLICE STATION - 17",
    phone: "9779580932 / 0172 – 2924413, 2700396",
    email: "ppneelam-chd@nic.in",
    address: "Police Post Neelam, Sector 17, Chandigarh",
  },
  {
    name: "SUB. INSP. JASKARAN SINGH",
    designation: "INCHARGE, POLICE POST ISBT-17, OF POLICE STATION – 17",
    phone: "9779580935 / 0172 – 2928511, 2700434",
    email: "ppisbt17-chd@nic.in",
    address: "Police Post ISBT –17, Sector 17, Chandigarh",
  },
  {
    name: "INSP. JAIVEER RANA",
    designation: "SHO, POLICE STATION – 11",
    phone: "9779580911 / 0172 – 2920296, 2760002",
    email: "pshops11-chd@nic.in",
    address: "Police Station –11, Near Fire Station, Sector 11, Chandigarh",
  },
  {
    name: "SI KULDEEP SINGH",
    designation: "INCHARGE, POLICE POST 24 OF POLICE STATION - 11",
    phone: "9779580942 / 0172 – 2928100, 2700531",
    email: "pp24-chd@nic.in",
    address: "Police Post 24, Sector 24, Chandigarh",
  },
  {
    name: "SUB. INSP. CHANDER MUKHI",
    designation: "INCHARGE, POLICE POST PGI OF POLICE STATION - 11",
    phone: "9779580940 / 0172 – 2928012, 2760004",
    email: "pppgi-chd@nic.in",
    address: "Police Post PGI, Sector 12, Chandigarh",
  },
  {
    name: "SUB. INSP. NAVEEN KUMAR",
    designation: "INCHARGE, POLICE POST PU CAMPUS - 11",
    phone: "",
    email: "",
    address: "Police Post PU Campus Sec 14 Chandigarh",
  },
  {
    name: "INSP. HARMINDERJIT SINGH",
    designation: "SHO, POLICE STATION - SARANGPUR",
    phone: "9779580945 / 0172 – 2680981, 2920900",
    email: "pshopsspur.chd@nic.in",
    address: "Police Station Sarangpur, EWS Colony Dhanas, Chandigarh",
  },
  // Continue adding remaining entries
];
const Telephone = () => {
    return (
      <div className="p-5 bg-gradient-to-r h-[110vh] from-white to-white min-h-screen">
        <h2 className="text-2xl font-bold text-black text-center mb-5">
          Chandigarh Police Directory
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-black border-collapse">
            <thead>
              <tr>
                <th className="px-4 py-2 bg-white text-black">Name</th>
                <th className="px-4 py-2 bg-white text-black">Designation</th>
                <th className="px-4 py-2 bg-white text-black">Phone No.</th>
                <th className="px-4 py-2 bg-white text-black">E-mail Id</th>
                <th className="px-4 py-2 bg-white text-black">Office Address</th>
              </tr>
            </thead>
            <tbody>
              {policeData.map((officer, index) => (
                <tr
                  key={index}
                  className=" transition-all ease-in-out duration-200"
                >
                  <td className="border px-4 py-2 text-center">{officer.name}</td>
                  <td className="border px-4 py-2 text-center">
                    {officer.designation}
                  </td>
                  <td className="border px-4 py-2 text-center">{officer.phone}</td>
                  <td className="border px-4 py-2 text-center">{officer.email}</td>
                  <td className="border px-4 py-2 text-center">{officer.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default Telephone;
  
