interface HasName2 {
    lastname: string;
    firstname?: string;
}

const pho: HasName2 = { lastname: 'Pho' };

function showName(obj: HasName2) {
    console.log(`Chao ${obj.firstname} ${obj.lastname}`);
}

showName(pho);
