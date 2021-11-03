class Player
{
    constructor()
    {

    }
    getCount()
    {
        var playerCountref = database.ref("playerCount")
        playerCountref.on("value",function(data)
        {
            playerCount = data.val()

        } )


    }
    updateCount(count)
    {
        database.ref("/").update(
            {
                playerCount : count
            }
        )
    }
    update(name)
    {
        var palyerIndex = "player"+playerCount
        database.ref(palyerIndex).set(
            {
                name : name
        })
    }
}