package study.studyspring.service;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import study.studyspring.domain.Member;
import study.studyspring.repository.MemoryMemberRepository;

import static org.assertj.core.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.*;

class MemberServiceTest {

    MemberService memberService;
    MemoryMemberRepository memberRepository;

    @BeforeEach // 테스트 실행 전 실행되는 함수
    public void beforeEach(){
        memberRepository = new MemoryMemberRepository();
        memberService = new MemberService(memberRepository); // DI 처리
    }

    @AfterEach
    public void afterEach() {
        memberRepository.clearStore();
    }

    @Test
    void 회원가입() { // 테스트 함수는 한글로 적어도 된다.
        // given : 주어진 것
        Member member = new Member();
        member.setName("spring");

        // when : 검증하는 것
        Long saveId = memberService.join(member);

        // then : 결과
        Member findMember = memberService.findOne(saveId).get();
        assertThat(member.getName()).isEqualTo(findMember.getName());
    }

    @Test
    public void 중복_회원_예외() {
        //given
        Member member1 = new Member();
        member1.setName("spring");

        Member member2 = new Member();
        member2.setName("spring");

        //when
        memberService.join(member1);
        // 2번째 파라미터의 로직(람다식)을 수행할 때 1번째 파라미터의 exception이 터져야 한다. 안그러면 오류남
        IllegalStateException e = assertThrows(IllegalStateException.class, () -> memberService.join(member2));

        assertThat(e.getMessage()).isEqualTo("이미 존재하는 회원입니다.");

/*
        try{
            memberService.join(member2);
            fail();
        }catch (IllegalStateException e){ // 중복 회원 예외가 정상적으로 처리된 것
            assertThat(e.getMessage()).isEqualTo("이미 존재하는 회원입니다.");
        }
*/

        //than
    }

    @Test
    void findMembers() {
    }

    @Test
    void findOne() {
    }
}