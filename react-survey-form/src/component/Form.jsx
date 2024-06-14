import React from 'react'

function Form() {
  return (
    <>

<div className="isolate px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Survey Form
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Please fill in the website information
        </p>
      </div>
      <form className="mx-auto mt-16 max-w-xl sm:mt-20 backdrop-blur-2xl backdrop-brightness-90 p-6 shadow-2xl ring-1 ring-black rounded-2xl">
        <div className="space-y-12">
          <div className="border-b border-gray-400 pb-12">
            <h2 className="text-base font-semibold leading-7">
              Personal Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Kindly fillup some of your personal details before going forward.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    placeholder="Archi"
                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    placeholder="snehi"
                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="name@example.com"
                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="role"
                  className="block text-sm font-medium leading-6"
                >
                  Which option best describes your current role?
                </label>
                <div className="mt-2">
                  <select
                    id="role"
                    name="role"
                    autoComplete="role-name"
                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>Student</option>
                    <option>Full-time Job</option>
                    <option>Full Time Learner</option>
                    <option>Prefer not to say</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="age"
                  className="block text-sm font-medium leading-6"
                >
                  Age
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="age"
                    id="age"
                    placeholder="20"
                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>

           <div className="border-b border-gray-400 pb-12">
            <h2 className="text-base font-semibold leading-7">
              Courses Information
            </h2>
        

            <div className="mt-10 space-y-10">
              <fieldset>
                <legend className="text-sm font-semibold leading-6">
                  In Which courses you want to improve from our side and add extra features in Software Development Courses.
                </legend>
                <div className="mt-6 space-y-6">
                  <div className="flex items-center gap-x-3">
                    <input
                      id="Mobile App Development"
                      name="service"
                      type="radio"
                      className="h-4 w-4 border-gray-400   text-black focus:ring-black"
                    />
                    <label
                      htmlFor="Mobile App Development"
                      className="block text-sm font-medium leading-6"
                    >
                      Mobile App Development
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="Web Programming/Web Design"
                      name="service"
                      type="radio"
                      className="h-4 w-4 border-gray-400 text-black focus:ring-black"
                    />
                    <label
                      htmlFor="Web Programming/Web Design"
                      className="block text-sm font-medium leading-6"
                    >
                      Web Programming/Web Design
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="Artificial Intelligence (A.I.) and Machine Learning (ML)"
                      name="service"
                      type="radio"
                      className="h-4 w-4 border-gray-400 text-black focus:ring-black"
                    />
                    <label
                      htmlFor="Artificial Intelligence (A.I.) and Machine Learning (ML)"
                      className="block text-sm font-medium leading-6"
                    >
                      Artificial Intelligence (A.I.) and Machine Learning (ML)
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="DevOps and Cloud Computing"
                      name="service"
                      type="radio"
                      className="h-4 w-4 border-gray-400 text-black focus:ring-black"
                    />
                    <label
                      htmlFor="DevOps and Cloud Computing"
                      className="block text-sm font-medium leading-6"
                    >
                     DevOps and Cloud Computing
                    </label>
                  </div>
                </div>
              </fieldset>
             
               

              <div class="col-span-full">
                <label for="cos" class="block text-sm font-medium leading-6">
                  Any comments or suggestions?
                </label>
                <div class="mt-2">
                  <textarea
                    id="cos"
                    name="cos"
                    rows="3"
                    placeholder="Enter your comment or suggestion here"
                    class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                  ></textarea>
                </div>
              </div>


              
              </div>
              <p class="mt-3 text-center text-sm leading-6 text-gray-600">
                Thank you for taking the time to help us improve the platform.
              </p>
            </div>
          </div>
        

        <div className="mt-6 flex items-center justify-end gap-x-6 "> 
          <button type="reset" className="text-sm font-semibold leading-6">
            Reset
          </button>
         
          <button
             type="submit"
            class="rounded-md  bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Submit
          </button>
          </div>
      </form>
    </div>
   
    </>
  )
}

export default Form