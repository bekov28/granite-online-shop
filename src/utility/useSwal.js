import Swal from 'sweetalert2'

export function useSwal() {
  const showAlert = async (options) => {
    await Swal.fire(options)
  }

  const showSuccess = async (message) => {
    return await showAlert({
      title: 'Success!',
      text: message,
      icon: 'success',
      position: 'top-end',
      showConfirmButton: false,
      time: 1500,
    })
  }

  const showError = async (message) => {
    return await showAlert({
      title: 'Error Occured!',
      text: message,
      icon: 'error',
      position: 'top-end',
      showConfirmButton: false,
      time: 1500,
    })
  }

  const showConfirm = async (message) => {
    return await showAlert({
      title: 'Are you sure?',
      text: message,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    })
  }

  return {showSuccess, showError, showConfirm }
}
