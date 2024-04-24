#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log("***WELCOME TO MY EASYPAISA ACCOUNT***");

   let mybalance = 500000 
        
        let easy = await inquirer.prompt([{
            type:"list",
            name:"paisa",
            message:"Mainmenu",
            choices:["Checkbalance","Moneytransfer","sendmoney","saving","Billpayments","Easyload"],
        }]) ; console.log(easy.paisa);
        
        switch (easy.paisa) {
            case "Checkbalance":
                 console.log(mybalance);
                break;
        


        case "Moneytransfer":
                       let phone =await inquirer.prompt([{
                        type:"input",
                        name:"number",
                        message:"Enter phone number by which you want to transfer your money "
                       }]);console.log(phone.number);
                    
                       let coo=await inquirer.prompt([{
                        type:"input",
                        name:"ler",
                        message:"Enter your amount that you want to transfer"
                       }]);console.log(coo.ler);
                       if (mybalance <= coo.ler)
                            {
                                console.log("Insufficient balance");
                            }
                            else {
                                mybalance = mybalance - coo.ler;
                                console.log("Your money is successfully transfered");
                                console.log("Your remaining amount is",mybalance);
                            }
                       
                    //    console.log("Your money is successfully transfered");
                       
                       break;
                       case "Easyload":
                        let load =await inquirer.prompt([{
                        type:"input",
                        name:"number",
                        message:"Enter phone Number "
                       }]);console.log(load.number);
                       let amount =await inquirer.prompt([{
                        type:"input",
                        name:"ler",
                        message:"How much load you want to transfer"
                       }]);console.log(amount.ler);
                       if (mybalance <= amount.ler)
                        {
                            console.log("Insufficient balance");
                        }
                        else {
                            mybalance = mybalance - amount.ler;
                            console.log("Your load is successfully transfered");
                            console.log("Your remaining amount is",mybalance-amount.ler);
                        }
                       
                    //    console.log("Your load is successfully transfered");
                       
                       break;
                       
                       case "saving":
                        let save =await inquirer.prompt([{
                        type:"input",
                        name:"number",
                        message:"Enter your money "
                       }]);console.log(save.number);
                       let amount1 =await inquirer.prompt([{
                        type:"input",
                        name:"ler",
                        message:"How much money you want to invest"
                       }]);console.log(amount1.ler);
                       console.log("My saving is : " , save.number-amount1.ler);
                       console.log("Your money is successfully saved");
                       console.log("Your remaining amount is",mybalance);
                       break;

                       
                       




                       case "Billpayments":
                        let bill =await inquirer.prompt([{
                        type:"input",
                        name:"bill2",
                        message:"Enter your Account Number"
                       }]);console.log(bill.bill2);
                       let pay=await inquirer.prompt([{
                        type:"input",
                        name:"pay2",
                        message:"Enter your Phone Number"
                       }]);console.log(pay.pay2);
                       
                       if (mybalance <= bill.bill2)
                        {
                            console.log("Insufficient balance");
                        }
                        else {
                            mybalance = mybalance - bill.bill2;
                            console.log("Your bill is successfully paid");
                            console.log("Your remaining amount is",mybalance);
                        }
                       
                    //    
                       
                       break;
    

                case "sendmoney" :
                    let send =await inquirer.prompt([{
                        type:"input",
                        name:"number",
                        message:"Enter your phone number"
                       }]);console.log(send.number);
                       let amount2 =await inquirer.prompt([{
                        type:"input",
                        name:"ler",
                        message:"Enter your amount"
                       }]);console.log(amount2.ler);
                       if (mybalance <= amount2.ler)
                        {
                            console.log("Insufficient balance");
                        }
                        else {
                            mybalance = mybalance - amount2.ler;
                            console.log("Your money is successfully transfered");
                            console.log("Your remaining amount is",mybalance);
                        }
                       
                    
                  
                       
                    break ;

                    
                    }
