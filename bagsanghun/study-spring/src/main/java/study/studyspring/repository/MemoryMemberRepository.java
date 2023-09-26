package study.studyspring.repository;

import org.springframework.stereotype.Repository;
import study.studyspring.domain.Member;

import java.util.*;

//@Repository
public class MemoryMemberRepository implements MemberRepository{

    private static Map<Long, Member> store = new HashMap<>();
    private static long sequence = 0L;
    @Override
    public Member save(Member member) {
        member.setId(++sequence);
        store.put(member.getId(), member);
        return member;
    }

    @Override
    public Optional<Member> findById(Long id) { // 아이디 찾기
        return Optional.ofNullable(store.get(id)); // NULL 반환 가능
    }

    @Override
    public Optional<Member> findByName(String name) { // 이름으로 찾기
        return store.values().stream()
                .filter(member -> member.getName().equals(name)) // 맵에서 계속 돌면서 람다식에 해당되는 name을 가진 멤버 반환
                .findAny();
    }

    @Override
    public List<Member> findAll() {
        return new ArrayList<>(store.values()); // 실무에서는 반복문 돌리기 편한 리스트 많이 쓴다.
    }

    public void clearStore() {
        store.clear();
    }
}
