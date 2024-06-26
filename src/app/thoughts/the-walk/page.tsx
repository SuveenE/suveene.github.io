import Image from "next/image";

const Walk = () => {
  return (
    <main className="flex min-h-screen flex-col md:w-[66%] mx-auto p-6 lg:pb-12 lg:px-24 lg:pt-16 font-mono bg-white">
      <p className="font-semibold text-2xl mb-4 mx-auto">
        <span className="text-3xl mr-2 ">🚶</span>HOW WE WALKED ACROSS SINGAPORE
      </p>

      <div className=" flex flex-col-reverse gap-2 md:flex-row md:items-center">
        <div className="flex flex-col md:w-[60%]">
          <p className="my-4 text-lg font-bold">TL;DR</p>
          <p className="mb-4">
            We embarked on an adventurous walk across Singapore, starting from
            the west and ending in the east. Eighteen of us began the journey,
            and eight of us made it to the end. It took us 16 sleepless hours.
          </p>
          <p>
            <span className="font-semibold">Start:</span> 7.30 PM May 31st 2024
            @Tuas Link MRT
          </p>
          <p>
            <span className="font-semibold">End:</span> 11.30 AM June 1st 2024
            @Changi City Point
          </p>
          <p>
            <span className="font-semibold">Distance:</span> 50km+
          </p>
          <p>
            <span className="font-semibold">Step count:</span> 67,000+
          </p>
          <p>
            <span className="font-semibold">Route:</span> Tuas Link MRT ={">"}{" "}
            Spring Leaf Prata, West Coast (Dinner) ={">"} Commenwealth ={">"}{" "}
            Clarke Quay ={">"} East Coast Park ={">"} Changi City Point
          </p>
          <p className="mt-4">
            <span className="font-semibold ">What we gained:</span> Sore legs,
            blistered feet, and{" "}
            <span className="font-bold ">
              THE ULTIMATE BRAGGING RIGHTS FOR WALKING ACROSS AN ENTIRE COUNTRY.
            </span>
          </p>
        </div>
        <div>
          <Image
            className="mx-auto md:mr-auto rounded-md"
            src="/thoughts/the-walk/map.JPG"
            alt="map"
            width={400}
            height={400}
            priority
          />
        </div>
      </div>
      <div>
        <p className="my-4 mt-8 text-lg font-bold">Why did we even do this?</p>
        <p className="my-1">
          About two months ago, a few of us stumbled upon an Instagram reel
          where a group of friends walked 64km across the country in 15 hours.
          Inspired, we decided to give it a try.
        </p>
        <p className="my-1">
          We pitched the idea to others, our group grew to 18 adventurous(or
          crazy) souls ready to embark on this
          not-so-common-Friday-night-activity.
        </p>

        <p className="my-1">
          But why did we do this? We still don’t have a clear answer. Maybe,
          like Forrest Gump felt like running, we just felt like walking a long
          distance.
        </p>
        <Image
          className="mx-auto md:mr-auto rounded-md my-4"
          src="/thoughts/the-walk/why.gif"
          alt="why"
          width={320}
          height={320}
          priority
        />
      </div>
      <div>
        <p className="my-4 mt-8 text-lg font-bold">
          Tuas Link to Dinner place (18kms)
        </p>
        <p className="my-1">
          We started off clocking in almost at a speedy 5km/h. The plan? Cover
          the first leg as fast as humanly possible.
        </p>
        <p className="my-1">
          At the 10km mark, we had a quick pit stop for snacks and drinks.
        </p>

        <p className="my-1">
          Then came our dinner at Spring Leaf Prata at West Coast. We had
          Pratas, biriyani and some drinks to fuel up for the rest of the
          journey. Some of us (yes, including me) even popped paracetamol,
          prepping for the pain that was to come.
        </p>
        <p className="my-1">
          Fresh socks, blister tape, and a hearty meal had us raring to go for
          the next leg, but the extended break made it tricky to keep up our
          initial pace.
        </p>
        <Image
          className="mx-auto md:mr-auto rounded-md my-4"
          src="/thoughts/the-walk/dinner.JPG"
          alt="dinner"
          width={320}
          height={320}
          priority
        />
      </div>
      <div>
        <p className="my-4 mt-8 text-lg font-bold">Clarke Quay at 4am (28km)</p>
        <p className="my-1">
          At the 25km mark, we took a quick break at a petrol station before
          continuing our walk along the Singapore River.
        </p>
        <p className="my-1">
          Seeing the city at 4am was quite the experience. The streets were
          empty, save for a few early-morning runners. It felt like we had
          Singapore all to ourselves.
        </p>

        <p className="my-1">
          This part of the journey was definitely slower. We had multiple short
          stops, and by this point, our group had thinned out to 12 walkers.
        </p>
        <Image
          className="mx-auto md:mr-auto rounded-md my-4"
          src="/thoughts/the-walk/clarkequay.JPG"
          alt="clarke quay"
          width={320}
          height={320}
          priority
        />
      </div>
      <div>
        <p className="my-4 mt-8 text-lg font-bold">
          Breakfast at East Coast Park (40km)
        </p>
        <p className="my-1">
          Me and 3 others ALMOST dropped out at breakfast! In fact this photo
          below, was taken right after we called it quits.
        </p>
        <p className="my-1">
          The breakfast break lasted nearly 45 minutes. When we stood up after
          sitting for so long, our legs were in excruciating pain, and to top it
          off, it was raining.
        </p>

        <p className="my-1">
          Huge shoutout to Malsha and Tharindu, the true heroes who were game
          for the last leg no matter what. After standing around for 5-10
          minutes and feeling somewhat OK, we decided to give it a shot. And
          then there were 8.
        </p>
        <p className="my-1">
          Malsha wanted me to tell this story to my kids maybe that&apos;s why I
          continued.
        </p>
        <Image
          className="mx-auto md:mr-auto rounded-md my-4"
          src="/thoughts/the-walk/breakfast.JPG"
          alt="company logo"
          width={320}
          height={320}
          priority
        />
      </div>
      <div>
        <p className="my-4 mt-8 text-lg font-bold">The Final Push (50km)</p>
        <p className="my-1">
          This was undoubtedly the hardest part of the walk.
        </p>
        <p className="my-1">
          Everyone was exhausted and battling blisters on their feet. To make
          things worse, we got soaked in the rain. The ponchos we wore offered
          little protection, and none of us had the energy to hold an umbrella.
        </p>
        <p className="my-1">
          We took it one kilometer at a time, and finally, we reached the end.
        </p>

        <Image
          className="mx-auto md:mr-auto rounded-md my-4"
          src="/thoughts/the-walk/the-end.gif"
          alt="the-end"
          width={320}
          height={320}
          priority
        />
      </div>
      <div>
        <p className="my-4 mt-8 text-lg font-bold">Honourable Mentions</p>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col gap-4">
            <p className="my-1 text-center">
              The 8 people who finished the walk! {"\n"}
              Malsha, Tharindu, Gimhani, Hyung Woon, Himaya, Dinuka, Janaka and
              Me (Suveen).
            </p>
            <Image
              className="mx-auto md:mr-auto rounded-md my-4"
              src="/thoughts/the-walk/final8.JPG"
              alt="final-8"
              width={280}
              height={280}
              priority
            />
          </div>
          <div className="flex flex-col gap-4">
            <p className="my-1 text-center">
              (Get Go) Shreyas for being our &quot;7-Eleven on wheels&quot;,
              bringing us snacks and ponchos, helping us tackle the rain.
            </p>
            <Image
              className="mx-auto md:mr-auto rounded-md my-4"
              src="/thoughts/the-walk/getgo.jpg"
              alt="getgo"
              width={280}
              height={280}
              priority
            />
          </div>
          <div className="flex flex-col gap-4">
            <p className="my-1 text-center">
              Dinithi and Wije ensured the walk actually happened.
              Unfortunately, they had to drop out at the 75% mark due to
              blisters.
            </p>
            <Image
              className="mx-auto md:mr-auto rounded-md my-4"
              src="/thoughts/the-walk/dini.jpg"
              alt="getgo"
              width={280}
              height={280}
              priority
            />
          </div>
        </div>
      </div>
      <p className=" my-2 mx-auto">- 2nd June 2024 -</p>
    </main>
  );
};

export default Walk;
