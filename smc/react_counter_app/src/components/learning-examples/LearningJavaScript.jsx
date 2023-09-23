const person = {
    name: 'MCS',
    address: {
        line1: 'Gaya-dong',
        city: 'busan',
        country: 'Republic of Korea'
    },
    profiles: ['twitter', 'linkedin', 'instagram'],
    printProfile: () => {
        person.profiles.map(
            (profile) => {
                console.log(profile)
            }
        )
    }
}

export default function LearningJavaScript() {
    return (
        <>
        <div>{person.name}</div>
        <div>{person.address.line1}</div>
        <div>{person.profiles[0]}</div>
        <div>{person.printProfile()}</div>
        </>
    )
}