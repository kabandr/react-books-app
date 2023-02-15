import { Pagination, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { PaginationProps } from "../../types/types";

export default function Paginate({
  count,
  itemsPerPage,
  setSelectedPage,
}: PaginationProps) {
  const navigate = useNavigate();
  parseInt(localStorage.getItem("selectedPage") || "1", 10);

  const handlePageClick = (event: any, page: number) => {
    event.preventDefault();
    setSelectedPage(page);
    navigate(`/?page=${page}`);
  };
  return (
    <>
      <Stack spacing={2} alignItems="center" margin={5}>
        <Pagination
          count={Math.ceil(count / itemsPerPage)}
          variant="outlined"
          shape="rounded"
          onChange={handlePageClick}
        />
      </Stack>
    </>
  );
}
