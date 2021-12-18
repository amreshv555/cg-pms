
import React from 'react'
import { getBankByIdService, addBankService, deleteBankService } from './service/BankService';
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getBankById, addbankdetails, deletebankbyaccno,updatebankdetails } from '../redux/BankSlice';
import axios from 'axios';

    const BankData = props => {
    const [accno, setAccno] = useState('');
    const dispatch = useDispatch();
    const bankDataFromStore = useSelector((state) => state.bank.bankState);
    const [newBankObj, setNewBankObj] = useState('');
    const [displayPensionerObj, setDisplayPensionerObj] = useState('');
    //const [updateBank, setUpdateBank] = useState('');
  //  const [displyUpdateBank, setDisplayUpdateBank] = useState('');


    const handleBank = (e) => {
        console.log('handleEmp');
        setAccno(e.target.value);
    }
    const handleAddbank = (e) => {
        console.log(e.target.value);
        setNewBankObj({
            ...newBankObj,
            [e.target.name]: e.target.value
        });
    }
    // const handleUpdateBank = (e) => {
    //     console.log(e.target.value);
    //     setUpdateBank({
    //         ...updateBank,
    //         [e.target.name]: e.target.value
    //     });
    // }

    const submitGetBankById = (evt) => {
        evt.preventDefault();
        console.log('submitGetBankById');
        getBankByIdService(accno)
            .then((response) => { dispatch(getBankById(response.data)) })
            .catch(() => {
                alert(`Bank with accno: ${accno} not found.`);
            });
        setAccno('');
    }
    const submitDeleteBankById = (evt) => {
        evt.preventDefault();
        console.log('submitDeleteBankById');
        deleteBankService(accno)

            .then((response) => {
                dispatch(deletebankbyaccno(response.data))
                alert('Bank Deleted ');
            })

            .catch(() => {
                alert(`Bank with accno: ${accno} not found.`);
            });
        setAccno('');
    }
    const addbankdetails = (evt) => {
        evt.preventDefault();
        axios.post(`addbankdetails`, newBankObj)
            .then((response) => {
                setDisplayPensionerObj(response.data);
                alert('Bank Details  added successfully.');
                setNewBankObj({ accno: '', bankName: "", branch: "", ifscCode: "", accHolderName: "" })
            })
            .catch(() => {
                alert("Bank could not be added.");
            });
    }

    // const updatebankdetails = (evt) => {
    //     evt.preventDefault();
    //     axios.post(`updatebankdetails`, updateBank)
    //         .then((response) => {
    //             setDisplayUpdateBank(response.data);
    //             alert('Bank Details update successfully.');
    //             setDisplayUpdateBank({ accno: '', bankName: "", branch: "", ifscCode: "", accHolderName: "" })
    //         })
    //         .catch(() => {
    //             alert("Bank could not be updated.");
    //         });
    // }

  return (
        <div className="container text-center">
            <h2 className="display-8 text-primary mt-3 mb-3" >Bank Component</h2>
            <p>Fetch data from backend, store it in redux store and get it to component</p>
            <div class="accordion" id="accordionExample">
            {/* <div className="col-7 border border-light shadow p-3 mb-5 bg-white form-center"> */}
            <div class="card">
    <div class="card-header" id="headingOne">
      <h2 class="mb-0">
        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <h5>Search Bank Account</h5>
                </button>
      </h2>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="card-body">
                <form className="form form-group form-primary " onSubmit={submitGetBankById}>
                    <input className="form-control mt-3" type="number" id="accno" name="accno" value={accno} onChange={handleBank} placeholder="Enter accno to search" />
                    <input className="form-control mt-3 btn btn-primary" type="submit" value="Find Bank" />
                </form>
                <table className="table table-light table-striped ">
                    <thead>
                        <tr>
                            <th>Accno </th>
                            <th>BankName</th>
                            <th>Branch</th>
                            <th>AccoundHolderName</th>
                            <th>ifcsCode</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{bankDataFromStore.accno}</td>
                            <td>{bankDataFromStore.bankName}</td>
                            <td>{bankDataFromStore.branch}</td>
                            <td>{bankDataFromStore.accHolderName}</td>
                            <td>{bankDataFromStore.ifscCode}</td>


                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
            </div>
</div>
            {/* <p>----------------------------------------------------------------------------------------</p> */}
            <br></br>
            <div className="container">
            <div class="card">
    <div class="card-header" id="headingTwo">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <h5>Remove Bank Account</h5>
        </button>
      </h2>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div class="card-body">
      <div>
                <div className="col-12 border border-light shadow p-3 mb-5 bg-white">
                    {/* <p>Remove Bank Account</p> */}
                    <form className="form form-group form-primary" onSubmit={submitDeleteBankById}>
                        <input className="form-control mt-4" type="number" id="accno" name="accno" value={accno} onChange={handleBank} placeholder="Enter accno to Delete" />
                        <input className="form-control mt-4 btn btn-danger" type="submit" value="Remove Bank" />
                    </form>


                </div>
                </div>
                </div>
                </div></div>
             

                {/* <p>-----------------------------------------------------------------------------------------------------</p> */}
                <div className="container">
                <div class="card">
    <div class="card-header" id="heading">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <h5>Add Bank Details</h5>
        </button>
      </h2>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="heading" data-parent="#accordionExample">
      <div class="card-body">
                    <div className="col-12 border border-light shadow p-3 mb-5 bg-white">
                        {/* <p>Add Bank Account</p> */}

                        <input className="form-control mt-3" type="text" id="accno" name="accno" value={newBankObj.accno} onChange={handleAddbank} placeholder="Enter accno to" />
                        <input className="form-control mt-3" type="text" id="bankName" name="bankName" value={newBankObj.bankName} onChange={handleAddbank} placeholder="Enter bankName to " />
                        <input className="form-control mt-3" type="text" id="branch" name="branch" value={newBankObj.branch} onChange={handleAddbank} placeholder="Enter branch to " />
                        <input className="form-control mt-3" type="text" id="accHolderName" name="accHolderName" value={newBankObj.accHolderName} onChange={handleAddbank} placeholder="Enter accHolderName to" />
                        <input className="form-control mt-3" type="text" id="ifscCode" name="ifscCode" value={newBankObj.ifscCode} onChange={handleAddbank} placeholder="Enter ifsccodeto " />

                        <input className="form-control mt-3 btn btn-primary" type="submit" value="Add Bank" onClick={addbankdetails} />
                        <table className="table table-light table-striped ">
                            <thead>
                                <tr>
                                    <th>Accno </th>
                                    <th>BankName</th>
                                    <th>Branch</th>
                                    <th>AccoundHolderName</th>
                                    <th>ifcsCode</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{displayPensionerObj.accno}</td>
                                    <td>{displayPensionerObj.bankName}</td>
                                    <td>{displayPensionerObj.branch}</td>
                                    <td>{displayPensionerObj.accHolderName}</td>
                                    <td>{displayPensionerObj.ifscCode}</td>


                                </tr>
                            </tbody>
                        </table>
                    </div>
                    </div> </div> </div> 
                
                </div>

{/* <p>------------------------------------------------------------------------------------------------------</p> */}
                {/* <div className="container">
                    <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
                        <p>update Bank Account</p>
                        <input className="form-control mt-3" type="text" id="accno" name="accno" value={updateBank.accno} onChange={handleUpdateBank} placeholder="Enter accno to" />
                        <input className="form-control mt-3" type="text" id="bankName" name="bankName" value={updateBank.bankName} onChange={handleUpdateBank} placeholder="Enter bankName to " />
                        <input className="form-control mt-3" type="text" id="branch" name="branch" value={updateBank.branch} onChange={handleUpdateBank} placeholder="Enter branch to " />
                        <input className="form-control mt-3" type="text" id="accHolderName" name="accHolderName" value={updateBank.accHolderName} onChange={handleUpdateBank} placeholder="Enter accHolderName to" />
                        <input className="form-control mt-3" type="text" id="ifscCode" name="ifscCode" value={updateBank.ifscCode} onChange={handleUpdateBank} placeholder="Enter ifsccodeto " />
                        <input className="form-control mt-3 btn btn-primary" type="submit" value="Update Bank" onClick={updatebankdetails} />
                        <table className="table table-light table-striped ">
                            <thead>
                                <tr>
                                    <th>Accno </th>
                                    <th>BankName</th>
                                    <th>Branch</th>
                                    <th>AccoundHolderName</th>
                                    <th>ifcsCode</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{displyUpdateBank.accno}</td>
                                    <td>{displyUpdateBank.bankName}</td>
                                    <td>{displyUpdateBank.branch}</td>
                                    <td>{displyUpdateBank.accHolderName}</td>
                                    <td>{displyUpdateBank.ifscCode}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div> */}
            </div>
            </div>
      

    );
}
export default BankData;