import axios from 'axios';


const getBankServiceCharge =(bankName) =>{
    console.log(`getBankServiceCharge`);
    return axios.get(`getPensionDetail`,bankName);
}

const calculatePension = (aadhar) =>{
    console.log(`calculatePension`);
    return axios.post(`calculatePension`,aadhar);
}

const processPension =(pensionDetails) =>{
    console.log(`calculatePension`);
    return axios.post(`processPension`,pensionDetails);
}