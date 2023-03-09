function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: "Reni",
    lastName: "Mehare"
};

const element = (
    <h1>
        Shalom, {formatName(user)}! </h1>
);

function Tiga() {
    return (
        element
    );
}

export default Tiga;