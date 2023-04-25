function User({ avatar, url, username }) {
    return (
        <div className="user">
            <img src={avatar} alt="Profile" width="100" height="100" />
            <a href={url} target="_blank" rel="noopener noreferrer">
                {username}
            </a>
        </div>
    );
}

export default User