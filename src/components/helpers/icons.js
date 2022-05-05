import {
    faSignOutAlt,
    faPhone,
    faEnvelope,
    faMapMarkedAlt,
    faLock,
    faCreditCard,
    faUser,
    faInfo,
    faCity,
    faDollarSign
  } from "@fortawesome/free-solid-svg-icons";
  import { library } from "@fortawesome/fontawesome-svg-core";
  
  const Icons = () => {
    return library.add(
      faSignOutAlt,
      faPhone,
      faEnvelope,
      faMapMarkedAlt,
      faLock,
      faCreditCard,
      faUser,
      faInfo,
      faCity,
      faDollarSign
    );
  };
  
  export default Icons;
  