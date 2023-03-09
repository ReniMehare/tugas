function getGreeting(user) {
    if (user) {
        return <h1>Shalom, {formatName(user)}!</h1>;
    }
    return <h1>Shalom, Stranger.</h1>;

}