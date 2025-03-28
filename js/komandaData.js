const peopleData = [
  {
    name: 'Ramil Mirzayev',
    work: 'CEO',
    photo: "../img/Cup5kWbVIA9nfp4TN5w9ecGRkQUkhfVh8umVITKe.jpg"
  },
  {
    name: 'Rasim Adurahman',
    work: 'Project Manager',
    photo: "https://api.websiteca.com/storage/uTGbFRppma9BB7BTTYffzFgy8m1MfQEa7RkNdAVe.jpg"
  },
  {
    name: 'Ahmad Rustamov',
    work: 'Team Lead',
    photo: "../img/cMDfFJGRPFXHH8bqJc6CXw5RT6RbYOjHDmmAhvq4.jpg"
  },
  {
    name: 'Murad Aghamedov',
    work: 'Backend Developer',
    photo: "https://api.websiteca.com/storage/4RIXyEhwxrU4nkxG2MUT2NqxZk0byqD4W7VyvnRf.jpg"
  },
  {
    name: 'Fuad Mammadov',
    work: 'Front-end Developer',
    photo: "../img/S3chfzTRjo3ykhVY7JaRbRNbJ28LVeXA1duP7YAN.png"
  },
  {
    name: 'Mirafgan Eminbayli',
    work: 'Front-end Developer',
    photo: "../img/8imyJH3yz86nxrP3fTkAfq9faXyfrPhLMsD5nWvm.jpg"
  },
  {
    name: 'Idrak Mustafazada',
    work: 'Customer Support',
    photo: "../img/UFeJ0M6cDGYTUcdTSz79BOYyuQMUIU5NWfhk2wuv.jpg"
  },
  {
    name: 'Saida Chinani',
    work: 'SMM',
    photo: "../img/k6AiYFMXvZ3HIpwTdQAZiHZMyjeOnGQ8TpZY4VTz.jpg"
  },
  {
    name: 'Matanat M.',
    work: 'Front-end Developer',
    photo: "../img/souFthYY1tpKeJKs20LqEqbjGvT1pxAZ5OBCtr1u.jpg"
  }
]

const komanda = document.getElementById('komanda')

function showKomanda() {
  komanda.innerHTML = ''
  peopleData.map(item => {
    komanda.innerHTML += `
        <article class="max-w-[260px] w-[100%] p-2 rounded-[24px] border-2 border-[#a271f1] relative 2xs:w-[50%] m:w-[25%]">
          <div class="rounded-[24px] overflow-hidden">
            <img class="w-[100%] h-[300px] m:h-[350px] bg-center object-cover" src="${item.photo}" alt="" />
            <div class="flex justify-center flex-col gap-1 items-center h-[70px] bg-white rounded-[24px] p-6 absolute left-0 right-0 bottom-2">
              <h4 class="text-[#300b60] font-bold mt-2">${item.name}</h4>
              <p class="text-[#4a2182] font-bold">${item.work}</p>
            </div>
          </div>
        </article>
  `
})
}
showKomanda()
