import React from 'react'

const CounterComp = () => {

    const counterItems = [
        { id: "01", count: 23, title: "Feature Deals", subTitle: "23% increase from last week", icon: "/assets/images/icons/arrow_up.png", bgColor: "bg-[#E8E2FF]" },
        { id: "02", count: 23, title: "Number of locations visited", subTitle: "10% increase from last week", icon: "/assets/images/icons/arrow_up.png", bgColor: "bg-[#EFFCEF]" },
        { id: "03", count: 23, title: "Skills learned", subTitle: "23% decrease from last week", icon: "/assets/images/icons/arrow_down.png", bgColor: "bg-[#E6F5F9]" },
        { id: "04", count: 23, title: "New merchandise listed", subTitle: "19% increase per month", icon: "/assets/images/icons/arrow_up.png", bgColor: "bg-[#FFEEE2]" },
    ];

    return (
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            { counterItems.map((eachCounterItem) => (
                <div key={ eachCounterItem.id } className={`h-auto w-full ${eachCounterItem.bgColor} relative rounded-xl px-5 py-4 shadow-sm`}>
                   
                    <h3 className="pt-1 font-medium text-center text-2xl">{ eachCounterItem.count }</h3>
                    <p className="font-normal text-center text-sm">{ eachCounterItem.title }</p>
                    <small className="mt-2 block text-center text-xs text-slate-500">{ eachCounterItem.subTitle }</small> 

                    <img src={ eachCounterItem.icon } alt={ eachCounterItem.icon } className="h-auto w-5 absolute top-3 right-3" />          
                </div>
            )) }
        </section>
    )
}

export default CounterComp;