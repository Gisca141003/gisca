function getGreeating(user) {
    if (user){
    return <h1>hello, {formatNama(user)}!</h1>;
}
return <h1>Shalom, storanger.</h1>;

}