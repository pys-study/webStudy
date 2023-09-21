package study.studyspring.repository;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.assertj.core.api.Assertions;
import study.studyspring.domain.Member;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.*;

class MemoryMemberRepositoryTest { // 여기에서 실행시키면 모든 테스트 가능

    MemoryMemberRepository repository = new MemoryMemberRepository();

    // 테스트가 끝날 때 마다 레포지토리를 깔끔하게 지워줘야 한다.
    @AfterEach
    public void afterEach(){
        repository.clearStore();
    }

    @Test
    public void save(){
        Member member = new Member();
        member.setName("spring");

        repository.save(member);

        Member result = repository.findById(member.getId()).get(); // Optional에서 값을 꺼낼 때는 .get()을 활용하여 꺼낼 수 있다.
        //System.out.println("result = " + (result == member));
        //Assertions.assertEquals(member, result); // 첫 번째 인자인 기대값(member)이 결과값(result)와 다르면 오류가 난다.
        //Assertions.assertEquals(member, null); // 오류 구문

        //실무에서는 아래 코드를 더 많이 쓴다.
        assertThat(member).isEqualTo(result); // 원래는 Assertions.assertThat 이지만 option + enter키 이후 임포트 하면 생략가능.
    }

    @Test
    public void findByName(){
        Member member1 = new Member();
        member1.setName("spring1");
        repository.save(member1);

        Member member2 = new Member(); // 복붙 이후 shift + f6으로 rename 가능
        member2.setName("spring2");
        repository.save(member2);

        Member result = repository.findByName("spring1").get(); // Optional 형식 반환을 까서 Member로 반환하는것이 .get()

        assertThat(result).isEqualTo(member1);
    }

    @Test
    public void findAll(){
        Member member1 = new Member();
        member1.setName("spring1");
        repository.save(member1);

        Member member2 = new Member();
        member2.setName("spring2");
        repository.save(member2);

        List<Member> result = repository.findAll();

        assertThat(result.size()).isEqualTo(2); // 회원이 두명인가?
    }
}