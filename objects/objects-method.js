let resturant ={
    name: "ASB",
    guestCapacity : 75,
    guestCount :0,
    checkAvailavaiblity : function (partySize)
    {
        let seatLeft = this.guestCapacity - this.guestCount
   ///console.log(this)  
    return partySize <=seatLeft
    },
    seatParty : function(partySize)
    {
        this.guestCount = this.guestCount+partySize
    },
    removeParty : function(partySize)
    {
        this.guestCount = this.guestCount - partySize
    }
    
    
}

//seatParty Method that adds o too the guest count
//removeParty




resturant.seatParty(72)
console.log(resturant.checkAvailavaiblity(4))
resturant.removeParty(5)
console.log(resturant.checkAvailavaiblity(4))