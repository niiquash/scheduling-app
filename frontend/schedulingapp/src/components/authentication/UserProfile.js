import { useAuth0 } from "@auth0/auth0-react";

const UserProfile = () => {

    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        isAuthenticated && (
            <div>
                <img class='userProfilePic' src={user.picture} alt="User profile" />
                {/* <h2>{user.name}</h2>
                <p>{user.email}</p> */}
            </div>
        )
    )
}

export default UserProfile
