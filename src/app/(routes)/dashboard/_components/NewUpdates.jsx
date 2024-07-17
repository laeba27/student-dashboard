import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../components/ui/carousel";
import Image from "next/image";

function NewUpdates() {
  return (
    <div className=" ">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        <div className="h-fit rounded-lg">
          <div>
            <Carousel>
              <CarouselContent>
                <CarouselItem>
                  <Image src="/img1.jpeg" alt="img1" width={650} height={500} />
                </CarouselItem>
                <CarouselItem>
                  <Image src="/img2.jpeg" alt="img2" width={650} height={500} />
                </CarouselItem>
                <CarouselItem>
                  <Image src="/img3.jpeg" alt="img3" width={650} height={500} />
                </CarouselItem>
                <CarouselItem>
                  <Image src="/img4.jpeg" alt="img4" width={650} height={500} />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2">
                Prev
              </CarouselPrevious>
              <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2">
                Next
              </CarouselNext>
            </Carousel>
          </div>
        </div>
        <div className=" max-h-48 md:max-h-64 lg:max-h-64 xl:max-h-80 overflow-y-scroll rounded-lg bg-blue-50 p-3">
          <h2 className="text-lg font-bold  text-cyan-600 py-2">University updates</h2>
          <div className="flex flex-col gap-2">
            <div className="bg-white p-2 border rounded-md">
              <h2 className="text-black font-semibold">Farewell 2k24</h2>
              <p className="first-letter:capitalize text-gray-500">
                its and announcement that our department is organising a
                farewell for batch 2022-2024 on 17th august
              </p>
            </div>
            <div className="bg-white p-2 border rounded-md">
              <h2 className="text-black font-semibold">
                Poster Designing 2k24
              </h2>
              <p className="first-letter:capitalize text-gray-500">
                its and announcement that our department is organising a Poster
                Designing competion on 10th august
              </p>
            </div>
            <div className="bg-white p-2 border rounded-md">
              <h2 className="text-black font-semibold">
                {" "}
                Innovation and Creation
              </h2>
              <p className="first-letter:capitalize text-gray-500">
                our department is organising an innovation and creation
                competion on 31st july having prize pool of 50000 so register
                right now.
              </p>
            </div>
            <div className="bg-white p-2 border rounded-md">
              <h2 className="text-black font-semibold">Tuskar arambh </h2>
              <p className="first-letter:capitalize text-gray-500">
                its and announcement that our society is organising an event of
                begining of tuskar at a block auditorium on 3rd august
              </p>
            </div>
            <div className="bg-white p-2 border rounded-md">
              <h2 className="text-black font-semibold">Farewell 2k24</h2>
              <p className="first-letter:capitalize text-gray-500">
                its and announcement that our department is organising a
                farewell for batch 2022-2024 on 17th august
              </p>
            </div>
            <div className="bg-white p-2 border rounded-md">
              <h2 className="text-black font-semibold">Farewell 2k24</h2>
              <p className="first-letter:capitalize text-gray-500">
                its and announcement that our department is organising a
                farewell for batch 2022-2024 on 17th august
              </p>
            </div>
          </div>
        </div>
        <div className=" max-h-48 md:max-h-64 lg:max-h-64 xl:max-h-80 overflow-y-scroll rounded-lg bg-blue-50 p-3">
          <h2 className="text-lg font-bold text-cyan-600 py-2 ">Class updates</h2>
          <div className="flex flex-col gap-2">
            <div className="bg-white p-2 border rounded-md">
              <h2 className="text-black font-semibold">Maths assignemnt 2 </h2>
              <p className="first-letter:capitalize text-gray-500">
                Match assignemnt 2 has been uploaded on your portal and the due
                date is 31st july . add it in your task !!
              </p>
            </div>
            <div className="bg-white p-2 border rounded-md">
              <h2 className="text-black font-semibold">Computer assignemnt 1</h2>
              <p className="first-letter:capitalize text-gray-500">
                Computer assignemnt 1 has been uploaded on your portal and the due
                date is 23rd july . add it in your task !!
              </p>
            </div>
            <div className="bg-white p-2 border rounded-md">
              <h2 className="text-black font-semibold">Time table change</h2>
              <p className="first-letter:capitalize text-gray-500">
                Time table has been changed and uploaded on your portal.
              </p>
            </div>
            <div className="bg-white p-2 border rounded-md">
              <h2 className="text-black font-semibold">Holiday</h2>
              <p className="first-letter:capitalize text-gray-500">
                Its the end of the year.your holiday will start from 1st july to 31st july . enjoy it , see you soon in next academic year
              </p>
            </div>
            <div className="bg-white p-2 border rounded-md">
              <h2 className="text-black font-semibold">Physics assignemnt 2 </h2>
              <p className="first-letter:capitalize text-gray-500">
                Physics assignemnt 2 has been uploaded on your portal and the due
                date is 31st july . add it in your task !!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewUpdates;
