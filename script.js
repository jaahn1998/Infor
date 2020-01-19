function onSignIn(googleUser)
{
    var profile = googleUser.getBasicProfile();
    var name =profile.getName();
    alert(name);
}