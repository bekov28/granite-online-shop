import Swal from 'sweetalert2'

export function useSwal() {
  const showAlert = async (options) => {
    return await Swal.fire(options)
  }

  const showSuccess = async (message) => {
    return await showAlert({
      title: 'Success!',
      text: message,
      icon: 'success',
      position: 'center',
      showConfirmButton: false,
      timer: 1500,
    })
  }

  const showError = async (message) => {
    return await showAlert({
      title: 'No Access!',
      text: message,
      icon: 'error',
      position: 'center',
      showConfirmButton: false,
      timer: 2000,
    })
  }

  const showConfirm = async (message) => {
    return await showAlert({
      title: 'Are you sure to delete?',
      text: message,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    })
  }

  return { showSuccess, showError, showConfirm }
}
