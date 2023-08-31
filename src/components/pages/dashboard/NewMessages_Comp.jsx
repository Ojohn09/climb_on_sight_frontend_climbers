import React from 'react'

const NewMessagesComp = () => {

    const messageItems = [
        { id: "01", userName: "Andrey Finn", message: "Hello, Good day i would love to make an enquiry as regards your timing...", count: "3", image: "/assets/images/female_profile_picture.png", },
        { id: "02", userName: "Andrey Finn", message: "Hello, Good day i would love to make an enquiry as regards your timing...", count: "3", image: "/assets/images/female_profile_picture.png", },
        { id: "03", userName: "Andrey Finn", message: "Hello, Good day i would love to make an enquiry as regards your timing...", count: "3", image: "/assets/images/female_profile_picture.png", },
        { id: "04", userName: "Andrey Finn", message: "Hello, Good day i would love to make an enquiry as regards your timing...", count: "3", image: "/assets/images/female_profile_picture.png", },
    ];

    return (
        <section>
            <h3 className="font-medium text-xl">New Messages</h3>

            <div className="mt-1 grid grid-cols-2 gap-x-10 gap-y-6 px-5 py-3 bg-white rounded-2xl">
                { messageItems.map((eachMessageItem) => (
                    <div key={ eachMessageItem.id } className="flex items-center gap-2">

                        <img src={ eachMessageItem.image } alt={ eachMessageItem.image } className="h-8 w-8 rounded-full" />

                        <div className="w-[80%] text-xs">
                            <h6>{ eachMessageItem.userName }</h6>
                            <p className="mt-1 text-gray-500">Hello, Good day i would love to make an enquiry as regards your timing... </p>
                        </div>

                        <p className="w-6 h-6 flex items-center justify-center text-white bg-black rounded-full">{ eachMessageItem.count }</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default NewMessagesComp;