import styled from 'styled-components';

export const TableContainer = styled.div`
  width: 85%;
  & tr td:nth-child(1) {
    width: 20%;
  }
  tr td:nth-child(2) {
    width: 50%;
  }
  tr td:nth-child(3) {
    width: 20%;
  }
  tr td:nth-child(4) {
    width: 10%;
  }
  th:nth-child(2) {
    width: 50%;
  }
`;

export const Table = styled.table`
  width: 100%;
  table-layout: fixed;
  border: none;
`;

export const TableBodyContainer = styled.div`
  height: 70vh;
  overflow-x: auto;
  margin-top: 0px;
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;
`;

export const Th = styled.th`
  font-weight: bold;
  text-align: left;
  border: none;
  padding: 10px 15px;
  background: #d8d8d8;
  font-size: 14px;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
`;

export const Td = styled.td`
  text-align: left;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  padding: 10px 15px;
  font-size: 14px;
  vertical-align: top;
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background: #f3f3f3;
  }
`;

export const TBody = styled.tbody``;

export const THead = styled.thead``;
