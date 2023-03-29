const showProfileInfo = function (userProfile) {
    const {
        name,
        tag,
        location,
        avatar,
        stats: { followers, views, likes },
    } = userProfile;

    console.log(name, tag, location, avatar, followers, views, likes);
};

const profile = {
    name: 'Jacques Gluke',
    tag: 'jgluke',
    location: 'Ocho Rios, Jamaica',
    avatar: 'https://i0.wp.com/www.followchain.org/wp-content/uploads/2021/09/best-discord-profile-pictures-4.png?w=256&ssl=1',
    stats: {
        followers: 5603,
        views: 4827,
        likes: 1308,
    },
};

showProfileInfo(profile);


const makeProfileMarkup = function (userProfile) {
    const {
        avatar = 'https://i0.wp.com/www.followchain.org/wp-content/uploads/2021/09/best-discord-profile-pictures-6.png?w=256&ssl=1',
        name,
        tag,
        location = 'Planet Earth',
        stats: { followers, views, likes },
    } = userProfile;
    
    return `<div>
        <img src='${avatar}'alt='user avatar'>
        <p>${name}<span>@${tag}</span></p>
        <p>Location: ${location}</p>
        <ul>
        <li>Followers: ${followers}</li>
        <li>Views: ${views}</li>
        <li>Likes: ${likes}</li>
        </ul>
    </div>`;
};

const markup = makeProfileMarkup(profile);
console.log(markup);
document.body.insertAdjacentHTML('afterbegin', markup);
