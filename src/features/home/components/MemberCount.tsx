import React from 'react';

type MemberCountProps = { grade: string; count: number; sp?: boolean; isLoading?: boolean };

const MemberCount = ({ grade, count, sp, isLoading }: MemberCountProps) => {
  if (isLoading) {
    return sp ? (
      <div className="flex w-full justify-between">
        <span className="text-lg">{grade}</span>
        <span className="w-10 animate-pulse"></span>
      </div>
    ) : (
      <div className="flex w-full items-center justify-between">
        <span className="text-lg">{grade}</span>
        <span className="h-4 w-12 animate-pulse rounded-full bg-gray-200"></span>
      </div>
    );
  }
  if (count === 0) {
    return null;
  }
  return sp ? (
    <div className="flex w-full justify-between">
      <span className="text-lg">{grade}</span>
      <span className="">{count}名</span>
    </div>
  ) : (
    <div className="flex w-full justify-between">
      <span className="text-lg">{grade}</span>
      <span className="text-xl">{count}名</span>
    </div>
  );
};

export default React.memo(MemberCount);
