/*Break->
- Terminates the current loop, switch, or label
- statement and transfers
- program control to the statement following the terminated statement.
*/

for(let i=0; i<10; i++){
    if(i==4){
        break;
    }
    console.log(i);     /*0
                          1
                          2
                          3*/
}

/*Continue -> 
- Terminates execution of the statements in the current iteration of the 
- current or labeled loop, and continues execution of the loop with the 
- next iteration.
*/

for(let i = 0; i<=10; i++){
    if(i==6){
        continue;
    }
    console.log(i);          /*
                                0
                                1
                                2
                                3
                                4
                                5
                                7
                                8
                                9
                                10
                            */
}