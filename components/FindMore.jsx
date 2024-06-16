/* eslint-disable react/no-array-index-key */
export default function FindMoreComponent() {
  const items = new Array(24).fill("Name");

  return (
    <div className='bg-[#11202D] text-black py-12'>
      <div className='container mx-auto px-6'>
        <h2 className='text-center text-3xl font-bold mb-8'>Find More</h2>
        <div className='grid grid-cols-4 gap-4'>
          {items.map((item, index) => (
            <div key={index} className='text-center'>
              <p className='text-lg'>{item}</p>
            </div>
          ))}
          <div className='col-span-4'>
            <hr className='border-t border-gray-300 my-6' />
          </div>
          {items.map((item, index) => (
            <div key={`second-set-${index}`} className='text-center'>
              <p className='text-lg'>{item}</p>
            </div>
          ))}
          <div className='col-span-4'>
            <hr className='border-t border-gray-300 my-6' />
          </div>
          {items.map((item, index) => (
            <div key={`second-set-${index}`} className='text-center'>
              <p className='text-lg'>{item}</p>
            </div>
          ))}
          <div className='col-span-4 mx-4'>
            <hr className='border-t border-gray-300 my-6 mx-6 px-8' />
          </div>
          {items.map((item, index) => (
            <div key={`second-set-${index}`} className='text-center'>
              <p className='text-lg'>{item}</p>
            </div>
          ))}
          <div className='col-span-4 mx-4'>
            <hr className='border-t border-gray-300 my-6 mx-6 px-8' />
          </div>
          {items.map((item, index) => (
            <div key={`second-set-${index}`} className='text-center'>
              <p className='text-lg'>{item}</p>
            </div>
          ))}
        </div>
        <article className='mt-20 text-wrap mx-10 px-4 text-left'>
          <p className='text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In esse
            sequi doloremque voluptatum repudiandae, quo laborum deleniti,
            labore accusamus eligendi nostrum laboriosam nulla ad expedita
            inventore modi ullam, rem explicabo?
          </p>
          <p className='text-sm break-after-column pt-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In esse
            sequi doloremque voluptatum repudiandae, quo laborum deleniti,
            labore accusamus eligendi nostrum laboriosam nulla ad expedita
            inventore modi ullam, rem explicabo?Lorem ipsum dolor sit amet
            consectetur adipisicing elit. In esse sequi doloremque voluptatum
            repudiandae, quo laborum deleniti, labore accusamus eligendi nostrum
            laboriosam nulla ad expedita inventore modi ullam, rem
            explicabo?Lorem ipsum dolor sit amet consectetur adipisicing elit.
            In esse sequi doloremque voluptatum repudiandae, quo laborum
            deleniti, labore accusamus eligendi nostrum laboriosam nulla ad
            expedita inventore modi ullam, rem explicabo? labore accusamus
            eligendi nostrum laboriosam nulla ad expedita inventore modi ullam,
            rem explicabo?Lorem ipsum dolor sit amet consectetur adipisicing
            elit. In esse sequi doloremque voluptatum repudiandae, quo laborum
            deleniti, labore accusamus eligendi nostrum laboriosam nulla ad
            expedita inventore modi ullam, rem explicabo?labore accusamus
            eligendi nostrum laboriosam nulla ad expedita inventore modi ullam,
            rem explicabo?Lorem ipsum dolor sit amet consectetur adipisicing
            elit. In esse sequi doloremque voluptatum repudiandae, quo laborum
            deleniti, labore accusamus eligendi nostrum laboriosam nulla ad
            expedita inventore modi ullam, rem explicabo?
          </p>
          <p className='text-left text-sm pt-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In esse
            sequi doloremque voluptatum repudiandae, quo laborum deleniti,
            labore accusamus eligendi nostrum laboriosam nulla ad expedita
            inventore modi ullam, rem explicabo?Lorem ipsum dolor sit amet
            consectetur adipisicing elit. In esse sequi doloremque voluptatum
            repudiandae, quo laborum deleniti, labore accusamus eligendi nostrum
            laboriosam nulla ad expedita inventore modi ullam, rem
            explicabo?Lorem ipsum dolor sit amet consectetur adipisicing elit.
            In esse sequi doloremque voluptatum repudiandae, quo laborum
            deleniti, labore accusamus eligendi nostrum laboriosam nulla ad
            expedita inventore modi ullam, rem explicabo?
            <br />
            labore accusamus eligendi nostrum laboriosam nulla ad expedita
            inventore modi ullam, rem explicabo?Lorem ipsum dolor sit amet
            consectetur adipisicing elit. In esse sequi doloremque voluptatum
            repudiandae, quo laborum deleniti, labore accusamus eligendi nostrum
            laboriosam nulla ad expedita inventore modi ullam, rem
            explicabo?labore accusamus eligendi nostrum laboriosam nulla ad
            expedita inventore modi ullam, rem explicabo?Lorem ipsum dolor sit
            amet consectetur adipisicing elit. In esse sequi doloremque
            voluptatum repudiandae, quo laborum deleniti, labore accusamus
            eligendi nostrum laboriosam nulla ad expedita inventore modi ullam,
            rem explicabo?
          </p>
          <p className='text-left text-sm break-after-column'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In esse
            sequi doloremque voluptatum repudiandae, quo laborum deleniti,
            labore accusamus eligendi nostrum laboriosam nulla ad expedita
            inventore modi ullam, rem explicabo?Lorem ipsum dolor sit amet
            consectetur adipisicing elit. In esse sequi doloremque voluptatum
            repudiandae, quo laborum deleniti, labore accusamus eligendi nostrum
            laboriosam nulla ad expedita inventore modi ullam, rem
            explicabo?Lorem ipsum dolor sit amet consectetur adipisicing elit.
            In esse sequi doloremque voluptatum repudiandae, quo laborum
            deleniti, labore accusamus eligendi nostrum laboriosam nulla ad
            expedita inventore modi ullam, rem explicabo?
            <br />
            labore accusamus eligendi nostrum laboriosam nulla ad expedita
            inventore modi ullam, rem explicabo?Lorem ipsum dolor sit amet
            consectetur adipisicing elit. In esse sequi doloremque voluptatum
            repudiandae, quo laborum deleniti, labore accusamus eligendi nostrum
            laboriosam nulla ad expedita inventore modi ullam, rem explicabo?
            labore accusamus eligendi nostrum laboriosam nulla ad expedita
            inventore modi ullam, rem explicabo?Lorem ipsum dolor sit amet
            consectetur adipisicing elit. In esse sequi doloremque voluptatum
            repudiandae, quo laborum deleniti, labore accusamus eligendi nostrum
            laboriosam nulla ad expedita inventore modi ullam, rem explicabo?
          </p>
        </article>
      </div>
    </div>
  );
}
