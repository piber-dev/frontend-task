import React, { useCallback } from 'react';

function Upload() {
    const handleDrop = useCallback((e) => {
      e.preventDefault();
      const files = e.dataTransfer.files;
      handleFiles(files);
    }, []);
  
    const handleDragOver = useCallback((e) => {
      e.preventDefault();
    }, []);
  
    const handleFileInputChange = (e) => {
      const files = e.target.files;
      handleFiles(files);
    };
  
    const handleFiles = (files) => {
      let isValid = true;

      if (files.length > 5) {
        isValid = false;
      }
  
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (!file.name.endsWith('.blend')) {
          isValid = false;
          break;
        }
  
        console.log(`name: ${file.name}`);
        console.log(`size: ${file.size} bytes`);
      }
  
      if (!isValid) {
        alert("error: one or more files was not a .blend file, or you tried to upload >5 files at once");
      } else {
        alert("success! see console for logs related to uploaded files")
      }
    };


  return (
    <div className="border-[1px] rounded-lg border-dashed hover:bg-[#f2f2f2] w-[50vw] h-[25vh] ml-[25%] mt-[12.5%] text-[#E5E7EB] hover:text-[#1F2937] stroke-[#E5E7EB] hover:stroke-[#1F2937]" onDrop={handleDrop} onDragOver={handleDragOver}>
        <label htmlFor="dropzone-file" className="">
            <div className="h-[25vh]">
                <div className='mt-8 mb-4 flex justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                    </svg>
                </div>
                <div className="text-center">
                    <p><a className="text-[#131886] font-bold cursor-pointer">Upload files</a> or drag and drop</p>
                    <p>(only .blend files supported)</p>
                </div>
                <input onChange={handleFileInputChange} className="hidden" id="dropzone-file" class="hidden" type="file" accept=".blend" multiple />
            </div>
        </label>
      </div>
    );
  }
  
  export default Upload;