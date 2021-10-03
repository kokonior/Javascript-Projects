
const file = {
  size: 5000, // edit file size here
  type: 'video/mp4' // edit file type here
}

const typefile = [
  'application/vnd.ms-excel',
  'application/pdf',
  'application/msword',
  'application/vnd.ms-office',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'image/jpeg',
  'image/png',
  'audio/mpeg',
  'audio/mp3',
  'video/mp4'
] // list of accepted file type

const validator = (files) => {

  let listError = []
  if (!files) return 'file not exist' // validate if files exist or not

  if (typeof files.size !== "number" || typeof files.type !== "string") {
    listError.push('file corrupted') // file corrupted if type of every properties doesn't match 
  }

  if (files.size > 5000000) {
    listError.push('file cannot exceed 5Mb') // validate if files match the required size
  }

  if (typefile.indexOf(file.type) === -1) {
    listError.push('cannot use this type file') // validate if file match required type file
  }

  if (listError.length > 0) {
    return listError;
  } else {
    return 'file pass all validation'
  }

};

console.log(validator(file))
