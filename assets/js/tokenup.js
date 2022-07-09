var interval = 100000;

function reset()
{
    localStorage.endTime = +new Date + interval;
}

if(!localStorage.endTime)
{
    reset();
}

setInterval(function()
{
    var remaining = localStorage.endTime - new Date;
    if( remaining >= 0 )
    {
        $('#timer').text( Math.floor( remaining / 382 ) );
    } else
    {
        reset();
    }
}, 1500);