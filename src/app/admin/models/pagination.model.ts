export class Pagination {
  page!: number
  total!: number
  lastPage!: number
  currentPage!: number

  constructor() {
    this.page = 1
    this.total = 1
    this.lastPage = 1
    this.currentPage = 1
  }

  selectPage = (page: number) => {
    this.currentPage = page;
  }
  prevPage() {
    if (this.currentPage === 1) {
      this.currentPage;
    }
    this.page--;
  }
  nextPage() {
    if (this.currentPage === this.lastPage) {
      this.page;
    }
    this.page++;
  }
}
