// Работа с коллекцией(массивом объектов)

const friends = [
    { name: 'Mango', online: false },
    { name: 'Kiwi', online: true },
    { name: 'Poly', online: true },
    { name: 'Ajax', online: false },
];

console.table(friends);

// for (const friend of friends) {
//     console.log(friend.name);

//     friend.newProp = 555;
// }

// console.table(friends);

// Ищем друга по имени

// const findFriendByName = function (allFriends, friendName) {
//     for (const friend of allFriends) {
//         console.log(friend.name);
//         if (friend.name === friendName) {
//             return 'FIND!';
//         }
//     }
//     return 'NOT FIND :(';
// };

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));

// Получаем имена всех друзей

const getAllNames = function (allFriends) {
    const names = [];

    for (const friend of allFriends) {
        names.push(friend.name);
    }
    return names;
};

// console.log(getAllNames(friends));


// Получаем имена только друзей которые онлайн

const getOnlineFriends = function (allFriends) {
    const onlineFriends = [];
    for (const friend of allFriends) {
        if (friend.online) {
            onlineFriends.push(friend);
        }
    }
    return onlineFriends;
};

// console.log(getOnlineFriends(friends));

const getOfflineFriends = function (allFriends) {
        const offlineFriends = [];
    for (const friend of allFriends) {
        if (!friend.online) {
            offlineFriends.push(friend);
        }
    }
    return offlineFriends;
};

// console.log(getOfflineFriends(friends));

const getFriendsByOnlineStatus = function (allFriends) {
    const friendsByStatus = {
        online: [],
        offline: [],
    };

    for (const friend of allFriends) {
        // IF...ELSE 
        if (friend.online) {
            friendsByStatus.online.push(friend);
            continue;
        }
        friendsByStatus.offline.push(friend);

        // // OR TERNAR
        // const key = friend.online ? 'online' : 'offline';
        // friendsByStatus[key].push(friend);
    }
    return friendsByStatus;
};

// console.log(getFriendsByOnlineStatus(friends));

// Task - Need to know number of properties (length) of object

const x = {
    a: 1,
    b: 2,
    c: 50,
    d: 100,
};

// console.log(Object.keys(x).length);
