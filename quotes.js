const quotes = [
    {
        q : "I find that the harder I work, the more luck I seem to have.",
        qA : thomasJefferosn,
isFav : localStorage.getItem('q0isFav') || 'no',
agreed : localStorage.getItem('q0Agreed') || 0,
    },
    {
    q : "Everything you've ever wanted is sitting on the other side of fear.",
        qA : georgeAddair,
        isFav : localStorage.getItem('q1isFav') || 'no',
        agreed : localStorage.getItem('q1Agreed') || 0,
    },
    {
        q : "Believe you can and you're halfway there.",
        qA : theodoreRoosevelt,
        isFav : localStorage.getItem('q2isFav') || 'no',
        agreed : localStorage.getItem('q1Agreed') || 0,
    },
    {
        q : "All the world’s a stage, and all the men and women merely players.",
        qA : shakespeare,
        isFav : localStorage.getItem('q3isFav') || 'no',
        agreed : localStorage.getItem('q1Agreed') || 0,
    },  
    {
        q :  "All that glitters is not gold.",
        qA : shakespeare,
        isFav : localStorage.getItem('q3isFav') || 'no',
        agreed : localStorage.getItem('q1Agreed') || 0,
    },  
    {
        q : "Cowards die many times before their deaths; the valiant never taste of death but once." ,
        qA : shakespeare,
        isFav : localStorage.getItem('q3isFav') || 'no',
        agreed : localStorage.getItem('q1Agreed') || 0,
    },  
    {
        q :  "Give me my robe, put on my crown; I have Immortal longings in me.",
        qA : shakespeare,
        isFav : localStorage.getItem('q3isFav') || 'no',
        agreed : localStorage.getItem('q1Agreed') || 0,
    },  
    {
        q : "There is nothing either good or bad, but thinking makes it so." ,
        qA : shakespeare,
        isFav : localStorage.getItem('q3isFav') || 'no',
        agreed : localStorage.getItem('q1Agreed') || 0,
    },  
    {
        q :  "Better three hours too soon than a minute too late.",
        qA : shakespeare,
        isFav : localStorage.getItem('q3isFav') || 'no',
        agreed : localStorage.getItem('q1Agreed') || 0,
    },  
    {
        q : "All is fair in love and war." ,
        qA : shakespeare,
        isFav : localStorage.getItem('q3isFav') || 'no',
        agreed : localStorage.getItem('q1Agreed') || 0,
    },  
    {
        q : "What’s done is done." ,
        qA : shakespeare,
        isFav : localStorage.getItem('q3isFav') || 'no',
        agreed : localStorage.getItem('q1Agreed') || 0,
    },  
    {
        q : "We always overestimate the change that will occur in the next two years and underestimate the change that will occur in the next ten. Don’t let yourself be lulled into inaction." ,
        qA : billGates,
        isFav : localStorage.getItem('q3isFav') || 'no',
        agreed : localStorage.getItem('q1Agreed') || 0,
    },  
    {
        q :  "I think it is possible for ordinary people to choose to be extraordinary.",
        qA : elon,
        isFav : localStorage.getItem('q3isFav') || 'no',
        agreed : localStorage.getItem('q1Agreed') || 0,
    },  
    {
        q : "If something is important enough, even if the odds are against you, you should still do it." ,
        qA : elon,
        isFav : localStorage.getItem('q3isFav') || 'no',
        agreed : localStorage.getItem('q1Agreed') || 0,
    },  
    {
        q :  "I could either watch it happen or be a part of it.",
        qA : elon,
        isFav : localStorage.getItem('q3isFav') || 'no',
        agreed : localStorage.getItem('q1Agreed') || 0,
    },  

]