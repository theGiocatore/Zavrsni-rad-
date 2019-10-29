function getLocation()
{
    if (navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition (showPosition,showError);
    }
}
function showPosition(position)
{
    var latlon=position.coords.lattitude+","+position.coords.longitude;
    var img_url=
}