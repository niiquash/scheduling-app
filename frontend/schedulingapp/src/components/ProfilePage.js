import { useAuth0 } from "@auth0/auth0-react";

const ProfilePage = () => {

    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        isAuthenticated && (
            <main className="Home">
                <img class='userProfilePic' src={user.picture} alt="User profile" />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            </main>
        )
    )
}

export default ProfilePage
