package study.studyspring.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import study.studyspring.domain.Member;
import study.studyspring.repository.MemberRepository;
import study.studyspring.repository.MemoryMemberRepository;

import java.util.List;
import java.util.Optional;


public class MemberService {

    private final MemberRepository memberRepository;

    //@Autowired // MemberRepository가 필요하므로 스프링이 컨테이너에 넣어준다.(@Autowired가 있어야 하는 이유)
    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    /**
     * 회원 가입
     */
    public Long join(Member member){
        //같은 이름이 있는 중복 회원X
        //memberRepository.findByName(member.getName()); // 이 상태에서 ctr+opt+V 누르면 아래처럼 됨
        //Optional<Member> result = memberRepository.findByName(member.getName());

        validateDuplicateMember(member); // 중복 회원 검증
        memberRepository.save(member);
        return member.getId();
    }

    private void validateDuplicateMember(Member member) { // 함수 전체 드래그 후 cmd+T 이후 Extract Method
        memberRepository.findByName(member.getName()) // 원래는 join 안에 전부 있던 함수임
            .ifPresent(m ->{ // Optional 메소드
                throw new IllegalStateException("이미 존재하는 회원입니다.");
            });
    }

    /**
     * 전체 회원 조회
     */
    public List<Member> findMembers(){
        return memberRepository.findAll();
    }

    public Optional<Member> findOne(Long memberId){
        return memberRepository.findById(memberId);
    }
}
